import express from "express";
import authController from "../controllers/auth.controller";
import { upload } from "../models/gridfs.model";
const authRouter = express.Router();
authRouter.post(
  "/signup",
  upload.single("image"),
  authController.signUpController
);
export { authRouter };
