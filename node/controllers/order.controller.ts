import { NodeRequest } from "../types";
import { Response } from "express";
import { Order } from "../models/order.model";

class OrderController {
  async add(req: NodeRequest, res: Response) {
    const newOrder = new Order(req.body);
    const lastOrder = (await Order.find()).at(-1);
    if (!lastOrder) return;
    const count = lastOrder?.slug?.match(/(?=0*)[^0]+/i)?.[0] as string;
    const tempSlug = 8 - +count.length;
    newOrder.slug = "0".repeat(tempSlug) + (+count + 1);
    newOrder.clientId = req.user?._id;
    req.user?.cart.splice(0, req.user?.cart.length);
    await req.user?.save();
    await newOrder.save();
    res.status(201).send({ code: 201, message: "ok" });
  }

  async updateStatus(req: NodeRequest, res: Response) {
    const order = await Order.findOne({ _id: req.body._id });
    if (!order)
      return res.status(404).send({ message: "Not found", code: 404 });
    order.status = req.body.status;
    await order.save();
    res.status(200).send({ code: 200, message: "Yangilandi!" });
  }
}

export default OrderController;
