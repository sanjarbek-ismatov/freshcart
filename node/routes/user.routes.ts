import express from "express";
import userController from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { upload } from "../models/gridfs.model";

const userRouter = express.Router();
userRouter.post(
  "/signup",
  upload.single("image"),
  userController.signUpController
);
userRouter.post("/login", userController.loginController);
userRouter.get("/info", authMiddleware, userController.getInfo);
userRouter.put("/product/add", authMiddleware, userController.addToCart);
userRouter.put(
  "/info/update",
  [authMiddleware, upload.single("image")],
  userController.updateUserInfo
);
export { userRouter };
