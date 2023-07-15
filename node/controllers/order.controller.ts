import { NodeRequest } from "../types";
import { Response } from "express";
import { Order } from "../models/order.model";
import { Vendor } from "../models/vendor.model";

class OrderController {
  async add(req: NodeRequest, res: Response) {
    const newOrder = await Order.create(req.body);
    newOrder.clientId = req.user?._id;
    await newOrder.save();
    res.status(201).send({ code: 201, message: "ok" });
  }

  async updateStatus(req: NodeRequest, res: Response) {
    const order = await Order.findOne({ productId: req.body.productId });
    if (!order)
      return res.status(404).send({ message: "Not found", code: 404 });
    order.status = req.body.status;
    await order.save();
    res.status(200).send({ code: 200, message: "Yangilandi!" });
  }

  async acceptOrder(req: NodeRequest, res: Response) {
    const order = await Order.findOne({ _id: req.body.id });
    if (!order) return res.status(404).send("Error");
    order.status = req.body.status;
    const vendor = await Vendor.findOne({ _id: order.vendorId });
    if (!vendor) return res.status(404).send("Error");
    if (order.status === "finished") {
      vendor.sells++;
    }
    await vendor.save();
    await order.save();
    res.status(200).send("Updated");
  }
}

export default OrderController;
