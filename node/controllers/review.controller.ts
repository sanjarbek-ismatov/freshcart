import { NodeRequest } from "../types";
import { Response } from "express";
import { Review } from "../models/review.model";
import { Order } from "../models/order.model";
import { Vendor } from "../models/vendor.model";

class ReviewController {
  async addReview(req: NodeRequest, res: Response) {
    const newReview = new Review(req.body);
    const order = await Order.findOne({ _id: req.body.id });
    if (!order) return res.status(404).send("Error");
    const vendor = await Vendor.findOne({ _id: order?.vendorId });
    if (!vendor) return res.status(404).send("Error");
    order.status = req.body.status;

    if (order.status === "finished") {
      vendor.sells++;
    }

    newReview.clientId = req.user?._id;
    if (Array.isArray(req.files)) {
      newReview.images = req.files?.map((file) => file.filename);
    }
    await vendor.save();
    await order.save();
    await newReview.save();
    res.status(201).send("Created");
  }
}

export default ReviewController;
