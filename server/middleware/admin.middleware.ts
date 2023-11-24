import { NextFunction, Response } from "express";
import Admin from "../models/admin.model";
import { passwordChecker } from "../helpers/passwordmanager";
import { NodeRequest } from "../types";

export default async function adminMiddleware(
  req: NodeRequest,
  res: Response,
  next: NextFunction,
) {
  const checkAdmin = await Admin.findOne({ login: req.body.login });
  req.admin = false;
  if (!checkAdmin)
    return res
      .status(403)
      .send({ code: 403, message: "Siz noto'g'ri yo'ldasiz" });
  if (!(await passwordChecker(req.body.password, checkAdmin.password)))
    return res.status(400).send({ code: 400, message: "Noto'g'ri parol" });
  req.admin = true;
  next();
}
