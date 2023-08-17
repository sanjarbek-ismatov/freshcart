import { Response } from "express";
import { Product } from "../models/product.model";
import { productValidator } from "../helpers/validator";
import { NodeRequest } from "../types";
import { sluggenerator } from "../helpers/sluggenerator";

async function getAll(req: NodeRequest, res: Response) {
  const products = await Product.find().populate("vendor category");
  res.status(200).send(products);
}

async function create(req: NodeRequest, res: Response) {
  const { error } = productValidator(req.body);

  if (error)
    return res
      .status(400)
      .send({ code: 400, message: error.details[0].message });
  const newProduct = new Product(req.body);
  newProduct.slug = sluggenerator(newProduct.name);
  if (req.vendor) {
    newProduct.vendor = req.vendor;
    req.vendor.products.push(newProduct);
    await req.vendor.save();
  }
  if (Array.isArray(req.files)) {
    newProduct.images = req.files?.map((e: Express.Multer.File) => e.filename);
  }
  await newProduct.save();
  res.status(201).send({ code: 201, message: "Yaratildi!" });
}

async function deleteProduct(req: NodeRequest, res: Response) {
  const productId = req.body.id;
  await Product.findByIdAndDelete(productId);
  req.vendor?.products.splice(
    req.vendor?.products.findIndex((e) => e._id.toString() === productId),
    1,
  );
  await req.vendor?.save();
  res.status(204).send({ code: 204, message: "ok" });
}

async function addDiscount(req: NodeRequest, res: Response) {
  const ids = req.body.products as string[];

  async function addDiscountFunc(_id: string) {
    const product = await Product.findOne({ _id });
    product?.discounts.push(req.body.percent);
    await product?.save();
  }

  ids.forEach((id) => {
    addDiscountFunc(id);
  });
  res.status(200).send({ message: "Chegirma qo'shildi", status: 200 });
}

async function getBySlug(req: NodeRequest, res: Response) {
  const product = await Product.findOne({ slug: req.params.slug }).populate({
    path: "reviews",
    populate: {
      path: "clientId",
    },
  });
  if (!product)
    return res.status(404).send({ code: 404, message: "not found" });
  res.status(200).send(product);
}

export default { getAll, create, getBySlug, deleteProduct, addDiscount };
