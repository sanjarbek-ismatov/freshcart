import { Request, Response } from "express";
async function signUpController(req: Request, res: Response) {
  res.status(200).send("Hello backend");
}
export default { signUpController };
