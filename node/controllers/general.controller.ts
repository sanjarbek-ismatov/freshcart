import { Response } from "express";
import { Site } from "../models/general.model";
import { NodeRequest } from "../types";

class GeneralController {
  async getInfo(req: NodeRequest, res: Response) {
    const info = await Site.findOne();
    res.status(200).send(info);
  }
  async updateInfo(req: NodeRequest, res: Response) {
    const info = await Site.findOneAndUpdate({}, { ...req.body });
    res.status(200).send(info);
  }
}
export default GeneralController;
