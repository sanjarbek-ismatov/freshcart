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
  productController.create,
);
productRoute.delete(
  "/delete",
  vendorAuthMiddleware,
  productController.deleteProduct,
);
productRoute.post(
  "/discount/add",
  vendorAuthMiddleware,
  productController.addDiscount,
);
productRoute.delete("/discount/remove", productController.removeDiscount);
productRoute.get("/discount/all", productController.getAllDiscounts);
export default productRoute;
