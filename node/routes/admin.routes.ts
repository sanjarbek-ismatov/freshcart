import express from "express";
import adminController from "../controllers/admin.controller";

const adminRouter = express.Router();
adminRouter.post("/create", adminController.createAdmin);

export default adminRouter;
