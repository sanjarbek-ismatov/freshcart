import { Response } from "express";
import { Site } from "../models/general.model";
import { NodeRequest } from "../types";

class GeneralController {
  async getInfo(req: NodeRequest, res: Response) {
    const info = await Site.findOne();
    res.status(200).send(info);
  }

  async updateInfo(req: NodeRequest, res: Response) {
    const info = await Site.findOne({});
    if (!info) return;
    if (req.files) {
      const files = req.files as Record<string, Express.Multer.File[]>;
      info.image = files["image"][0].filename;
      info.logo = files["logo"][0].filename;
    }
    Object.assign(info, req.body);
    await info.save();
    res.status(200).send(info);
  }
}

export default GeneralController;
