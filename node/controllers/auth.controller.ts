import { Request, Response } from "express";
import { registerValidator } from "../helpers/validator";
import { User } from "../models/user.model";
import { tokenGenerator } from "../helpers/tokengenerator";
import { passwordChecker } from "../helpers/passwordmanager";
async function signUpController(req: Request, res: Response) {
  const error = registerValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const user = await User.findOne({ username: req.body.username });
  if (user)
    return res
      .status(400)
      .send({ code: 400, message: "Foydalanuvchi nomi allaqachon mavjud" });
  const tempUser = await User.create(req.body);
  await tempUser.save();
  res.status(200).send({ code: 201, message: "Bajarildi" });
}
async function loginController(req: Request, res: Response) {
  const user = await User.findOne({email: req.body.email})
  if(!user) return res.send({code: 404, message: 'Foydalanuvchi topilmadi!'})
  passwordChecker(req.body.password, user.password)
  const token = tokenGenerator(req.body.email)
  res.status(200).send(token)
}
export default { signUpController, loginController };
