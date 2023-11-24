import express from "express";
import categoryController from "../controllers/category.controller";

const categoryRoutes = express.Router();

categoryRoutes.get("/all", categoryController.getAll);
categoryRoutes.post("/create", categoryController.create);
export default categoryRoutes;
