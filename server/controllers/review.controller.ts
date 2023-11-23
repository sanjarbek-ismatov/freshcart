import { NodeRequest, ProductTypeWithData } from "../types";
import { Response } from "express";
import { Review } from "../models/review.model";
import { Order } from "../models/order.model";
import { Vendor } from "../models/vendor.model";
import { Product } from "../models/product.model";

class ReviewController {
  async getAll(req: NodeRequest, res: Response) {
    const reviews = await Review.find({ vendorId: req.vendor?._id }).populate(
      "clientId",
    );
    res.status(200).send(reviews);
  }

  async addReview(req: NodeRequest, res: Response) {
    const newReview = new Review(req.body);
    const order = await Order.findOne({ _id: req.body.orderId });
    if (!order) return res.status(404).send("Order is not found");
    const vendor = await Vendor.findOne({ _id: order?.vendorId });
    if (!vendor) return res.status(404).send("Vendor is not found");
    const product = await Product.findOne({
      _id: order.productId._id,
    });
    if (!product) return res.status(404).send("Product is not found");
    order.status = req.body.status;
    if (order.status === "finished") {
      vendor.sells++;
      vendor.stars += newReview.star;
      vendor.annualIncome += order.totalPrice;
    }

    newReview.clientId = req.user?._id;
    if (Array.isArray(req.files)) {
      newReview.images = req.files?.map((file) => file.filename);
    }
    product.reviews.push(newReview._id);
    const unpackedProduct = (await product.populate(
      "reviews",
    )) as ProductTypeWithData;
    const accumulator = [...unpackedProduct.reviews, newReview].reduce(
      (previousValue, currentValue) => {
        return {
          count: ++previousValue.count,
          sum: previousValue.sum + currentValue.star,
        };
      },
      { count: 0, sum: 0 },
    );
    product.rating = Math.round(accumulator.sum / accumulator.count);
    await vendor.save();
    await order.save();
    await newReview.save();
    await product.save();
    res.status(201).send("Created");
  }
}

export default ReviewController;
