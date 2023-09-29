import Admin from "../models/admin.model";
import { NodeRequest } from "../types";
import { Response } from "express";
import { passwordChecker, passwordGenerator } from "../helpers/passwordmanager";
import { tokenGenerator } from "../helpers/tokengenerator";

async function createAdmin(req: NodeRequest, res: Response) {
  const { key, password, login } = req.body;
  if (!(key && typeof password === "string" && login))
    return res.status(400).send({
      code: 400,
      message: "To'liq form emas",
    });
  if (key !== process.env.KEY)
    return res.status(403).send({ code: 403, message: "Siz ega emassiz" });
  const hashedPassword = await passwordGenerator(password);
  const newAdmin = new Admin({ login, password: hashedPassword });
  await newAdmin.save();
  res.status(201).send({ code: 201, message: "Yaratildi" });
}

async function loginAdmin(req: NodeRequest, res: Response) {
  const admin = await Admin.findOne({ login: req.body.login });
  if (!admin)
    return res.status(404).send({ code: 404, message: "Mavjud emas admin" });
  const checkPass = await passwordChecker(req.body.password, admin.password);
  if (!checkPass)
    return res.status(401).send({ code: 401, message: "Xato parol" });
  const token = tokenGenerator("", "login", admin.login);
  res
    .setHeader("x-admin-token", token)
    .send({ code: 200, message: "Bajarildi" });
}

export default { createAdmin, loginAdmin };
