import { Response } from "express";
import { registerValidator } from "../helpers/validator";
import { User } from "../models/user.model";
import { tokenGenerator } from "../helpers/tokengenerator";
import { passwordChecker, passwordGenerator } from "../helpers/passwordmanager";
import { NodeRequest } from "../types";

async function signUpController(req: NodeRequest, res: Response) {
  const error = registerValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await User.findOne({ username: req.body.username });
  if (user)
    return res
      .status(400)
      .send({ code: 400, message: "Foydalanuvchi nomi allaqachon mavjud" });
  const hashedPassword = passwordGenerator(req.body.password);
  const tempUser = await User.create(req.body);
  if (req.file) tempUser.image = req.file?.filename;
  tempUser.password = hashedPassword;
  await tempUser.save();
  res.status(200).send({ code: 201, message: "Bajarildi" });
}

async function loginController(req: NodeRequest, res: Response) {
  const user = await User.findOne({ email: req.body.email });
  if (!user)
    return res
      .status(404)
      .send({ code: 404, message: "Foydalanuvchi topilmadi!" });
  const checkedPassword = passwordChecker(req.body.password, user.password);
  if (!checkedPassword)
    return res.status(401).send({ code: 401, message: "Xato parol" });
  const token = tokenGenerator(req.body.email);
  res
    .status(200)
    .setHeader("x-token", token)
    .send({ code: 200, message: "Bajarildi" });
}

async function getInfo(req: NodeRequest, res: Response) {
  const user = await req.user?.populate("cart.id liked");
  res.status(200).send(user);
}

async function addToCart(req: NodeRequest, res: Response) {
  const user = req.user;
  if (req.body.type === "cart") {
    user?.cart.includes(req.body)
      ? user.cart.splice(user.cart.indexOf(req.body, 1))
      : user?.cart.unshift(req.body);
  } else
    user?.liked.includes(req.body.id.toString())
      ? user.liked.splice(user.liked.indexOf(req.body.id, 1))
      : user?.liked.unshift(req.body.id);
  await user?.save();
  res.status(200).send({ code: 200, message: "Ok" });
}

async function updateUserInfo(req: NodeRequest, res: Response) {
  const user = await User.findById(req.user?._id);

  if (!user)
    return res
      .status(404)
      .send({ code: 404, message: "Foydalanuvchi topilmadi" });
  if (req.file) user.image = req.file.filename;

  if (req.body.password) user.password = passwordGenerator(req.body.password);

  delete req.body.image;
  delete req.body.password;
  Object.assign(user, req.body);

  user.save();
  res.status(200).send("Yeah");
}

export default {
  signUpController,
  loginController,
  getInfo,
  addToCart,
  updateUserInfo,
};
