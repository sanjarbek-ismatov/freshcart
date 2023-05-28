import express from "express";
import vendorController from "../controllers/vendor.controller";
import { upload } from "../models/gridfs.model";

const vendorRoute = express.Router();
vendorRoute.post(
  "/register",
  upload.fields([{ name: "image" }, { name: "banner" }]),
  vendorController.register
);
vendorRoute.post("/login", vendorController.login);
vendorRoute.get("/all", vendorController.getAll);
vendorRoute.get("/:slug", vendorController.getSingleVendor);
export default vendorRoute;
