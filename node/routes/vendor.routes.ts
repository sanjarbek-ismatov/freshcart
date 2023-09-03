import express from "express";
import vendorController from "../controllers/vendor.controller";
import { upload } from "../models/gridfs.model";
import { vendorAuthMiddleware } from "../middleware/auth.middleware";

const vendorRoute = express.Router();
vendorRoute.post(
  "/register",
  upload.fields([{ name: "image" }, { name: "banner" }]),
  vendorController.register
);
vendorRoute.post("/login", vendorController.login);
vendorRoute.get("/all", vendorController.getAll);
vendorRoute.get("/me", vendorAuthMiddleware, vendorController.getMe);
vendorRoute.get("/:slug", vendorController.getSingleVendor);
vendorRoute.put("/update",[upload.single("image"), vendorAuthMiddleware],  vendorController.updateInfo)
export default vendorRoute;
