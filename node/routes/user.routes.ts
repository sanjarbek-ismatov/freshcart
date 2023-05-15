import express from "express";
import userController from "../controllers/user.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const userRouter = express.Router();
userRouter.post("/signup", userController.signUpController);
userRouter.post("/login", userController.loginController);
userRouter.get("/info", authMiddleware, userController.getInfo);
userRouter.put("/product/add", authMiddleware, userController.addToCart);
export { userRouter };
