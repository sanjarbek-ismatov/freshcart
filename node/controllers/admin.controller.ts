import Admin from "../models/admin.model";
import { NodeRequest } from "../types";
import { Response } from "express";
import {passwordGenerator} from "../helpers/passwordmanager";
async function createAdmin(req: NodeRequest, res: Response) {
  const { key, password, login } = req.query;
  if(!(key && typeof password === 'string' && login)) return res.status(400).send({code: 400, message: "To'liq form emas"})
  if (key !== process.env.KEY)
    return res.status(403).send({ code: 403, message: "Siz ega emassiz" });
  const hashedPassword = passwordGenerator(password)
  const newAdmin = await Admin.create({ login, password: hashedPassword });
  await newAdmin.save()
  res.status(201).send({code: 201, message: 'Yaratildi'})
}
export default { createAdmin };
