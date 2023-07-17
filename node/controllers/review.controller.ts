import { NodeRequest } from "../types";
import { Response } from "express";
import { Review } from "../models/review.model";
import { Order } from "../models/order.model";
import { Vendor } from "../models/vendor.model";
import { Product } from "../models/product.model";

class ReviewController {
  async addReview(req: NodeRequest, res: Response) {
    const newReview = new Review(req.body);
    const order = await Order.findOne({ _id: req.body.orderId });
    if (!order) return res.status(404).send("Order is not found");
    const vendor = await Vendor.findOne({ _id: order?.vendorId });
    if (!vendor) return res.status(404).send("Vendor is not found");
    const product = await Product.findOne({ _id: order.productId._id });
    if (!product) return res.status(404).send("Product is not found");
    order.status = req.body.status;
    if (order.status === "finished") {
      vendor.sells++;
    }

    newReview.clientId = req.user?._id;
    if (Array.isArray(req.files)) {
      newReview.images = req.files?.map((file) => file.filename);
    }
    product.reviews.push(newReview._id);
    await vendor.save();
    await order.save();
    await newReview.save();
    await product.save();
    res.status(201).send("Created");
  }
}

export default ReviewController;
