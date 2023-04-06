import { Request, Response } from "express";
import { registerValidator } from "../helpers/validator";
async function signUpController(req: Request, res: Response) {
  const error = registerValidator(req.body)
  if(error) return res.status(400).send(error.details[0].message)
  
  res.status(200).send();
}
export default { signUpController };
