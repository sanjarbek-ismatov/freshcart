import { Response } from "express";
import { NodeRequest } from "../types";
import { vendorValidator } from "../helpers/validator";
import { Vendor } from "../models/vendor.model";
import { tokenGenerator } from "../helpers/tokengenerator";
import { passwordChecker, passwordGenerator } from "../helpers/passwordmanager";
import { Order } from "../models/order.model";

async function getAll(req: NodeRequest, res: Response) {
  const vendors = await Vendor.find().select("-password").populate("products");
  res.status(200).send(vendors);
}

async function getSingleVendor(req: NodeRequest, res: Response) {
  const vendor = await Vendor.findOne({ slug: req.params.slug })
    .populate("products")
    .select("-password");
  res.status(200).send(vendor);
}

async function getMe(req: NodeRequest, res: Response) {
  const vendor = await req.vendor?.populate("products");
  const orders = await Order.find({ vendorId: vendor?._id }).populate(
    "productId"
  );
  res.status(200).send({ vendor, orders });
}

async function register(req: NodeRequest, res: Response) {
  const { error } = vendorValidator(req.body);
  if (error)
    return res
      .status(400)
      .send({ code: 400, message: error.details[0].message });
  const checkVendor = await Vendor.findOne({ slug: req.body.slug });
  if (checkVendor)
    return res
      .status(400)
      .send({ code: 400, message: "Nom allaqachon mavjud" });
  const newVendor = await Vendor.create(req.body);
  const files = req.files as { [fieldname: string]: Express.Multer.File[] };
  newVendor.category = req.body.category.split(/\s*,\s*/g);
  newVendor.image = files["image"][0].filename;
  newVendor.banner = files["banner"][0].filename;
  newVendor.password = passwordGenerator(req.body.password);
  await newVendor.save();
  res.status(201).send({ code: 201, message: "Yaratildi" });
}

async function login(req: NodeRequest, res: Response) {
  const checkVendor = await Vendor.findOne({ email: req.body.email });
  if (!checkVendor)
    return res.status(404).send({ code: 404, message: "Topilmadi" });
  const checkedPassword = passwordChecker(
    req.body.password,
    checkVendor.password
  );
  if (!checkedPassword)
    return res.status(401).send({ code: 401, message: "Xato parol" });
  const token = tokenGenerator(checkVendor.email);
  if (!token) throw new Error("Token");
  res
    .status(200)
    .setHeader("x-vendor-token", token)
    .send({ code: 200, message: "Bajarildi" });
}

export default { register, login, getAll, getSingleVendor, getMe };
