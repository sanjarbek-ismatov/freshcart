import express from "express";
import OrderController from "../controllers/order.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { upload } from "../models/gridfs.model";

const orderRouter = express.Router();
const controller = new OrderController();
orderRouter.post("/add", [upload.none(), authMiddleware], controller.add);
export default orderRouter;
