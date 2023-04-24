import Admin from "../models/admin.model";
import { NodeRequest } from "../types";
import { Response } from "express";
async function createAdmin(req: NodeRequest, res: Response) {
  const { key, password, login } = req.query;
  if (key !== process.env.KEY)
    return res.status(403).send({ code: 403, message: "Siz ega emassiz" });
  const newAdmin = await Admin.create({ login, password });

}
export default { createAdmin };
