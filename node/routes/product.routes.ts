import express from "express";
import productController from "../controllers/product.controller";
import { vendorAuthMiddleware } from "../middleware/auth.middleware";
import { upload } from "../models/gridfs.model";

const productRoute = express.Router();
productRoute.get("/all", productController.getAll);
productRoute.get("/:slug", productController.getBySlug);
productRoute.post(
  "/create",
  [upload.array("images"), vendorAuthMiddleware],
  productController.create,
);
productRoute.delete(
  "/delete",
  vendorAuthMiddleware,
  productController.deleteProduct,
);
productRoute.put("/archive", vendorAuthMiddleware, productController.archiveProduct)
productRoute.post(
  "/discount/add",
  vendorAuthMiddleware,
  productController.addDiscount,
);
productRoute.delete(
  "/discount/remove",
  vendorAuthMiddleware,
  productController.removeDiscount,
);
productRoute.get("/discount/all", productController.getAllDiscounts);
export default productRoute;
