import { NodeRequest } from "../types";
import { Response } from "express";
import { Review } from "../models/review.model";

class ReviewController {
  async addReview(req: NodeRequest, res: Response) {
    const newReview = new Review(req.body);
    newReview.clientId = req.user?._id;
    if (Array.isArray(req.files)) {
      newReview.images = req.files?.map((file) => file.filename);
    }
    res.status(201).send("Created");
  }
}

export default ReviewController;
