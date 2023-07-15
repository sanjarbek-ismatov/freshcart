import express from "express";
import ReviewController from "../controllers/review.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { upload } from "../models/gridfs.model";

const reviewRoutes = express.Router();
const controller = new ReviewController();
reviewRoutes.post(
  "/add",
  [authMiddleware, upload.array("images")],
  controller.addReview,
);
export default reviewRoutes;
