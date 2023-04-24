import { Response } from "express";
import { Product } from "../models/product.model";
import { productValidator } from "../helpers/validator";
import {NodeRequest} from "../types";
async function getAll(req: NodeRequest, res: Response) {
  const products = await Product.find();
  res.status(200).send(products);
}
async function create(req: NodeRequest, res: Response) {
  const { error } = productValidator(req.body);

  if (error)
    return res
      .status(400)
      .send({ code: 400, message: error.details[0].message });
  const newProduct = await Product.create(req.body);
  if (req.vendor) {
    newProduct.shop = req.vendor;
  }
  if (Array.isArray(req.files)) {
    const images = req.files?.map((e: Express.Multer.File) => e.filename);
    newProduct.images = images;
  }
  console.log(newProduct);
    await newProduct.save();
  res.status(201).send({ code: 201, message: "Yaratildi!" });
}
export default { getAll, create };
