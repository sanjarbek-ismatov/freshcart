import express from "express";
import productController from "../controllers/product.controller";
import { upload } from "../models/gridfs.model";
import { vendorAuthMiddleware } from "../middleware/auth.middleware";

const productRoute = express.Router();
productRoute.get("/all", productController.getAll);
productRoute.get("/:slug", productController.getBySlug);
productRoute.post(
  "/create",
  [vendorAuthMiddleware, upload.array("images")],
  productController.create
);
productRoute.delete(
  "/delete",
  vendorAuthMiddleware,
  productController.deleteProduct
);
export default productRoute;
