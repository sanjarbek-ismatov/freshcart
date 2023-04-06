import { Request, Response } from "express";
import { registerValidator } from "../helpers/validator";
import { User } from "../models/user.model";
async function signUpController(req: Request, res: Response) {
  const error = registerValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const tempUser = await User.create(req.body);
  if (req.file) tempUser.image = req.file?.filename;
  await tempUser.save();
  res.status(200).send({ code: 201, message: "Bajarildi" });
}
export default { signUpController };
