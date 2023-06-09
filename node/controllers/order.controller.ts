import { NodeRequest } from "../types";
import { Order } from "../models/order.model";
import { Response } from "express";

class OrderController {
  async add(req: NodeRequest, res: Response) {
    const newOrder = await Order.create(req.body);
    newOrder.clientId = req.user?._id;
    console.log(newOrder);
    // await newOrder.save();
    res.status(201).send({ code: 201, message: "ok" });
  }
}

export default OrderController;
