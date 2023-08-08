import express from "express";
import GeneralController from "../controllers/general.controller";
const controller = new GeneralController();
const generalRouter = express.Router();
generalRouter.get("/info", controller.getInfo);
generalRouter.put("/info/update", controller.updateInfo);
export default generalRouter;
