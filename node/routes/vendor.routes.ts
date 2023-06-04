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
vendorRoute.get("/:slug", vendorController.getSingleVendor);
vendorRoute.get("/me", vendorAuthMiddleware, vendorController.getMe);
export default vendorRoute;
