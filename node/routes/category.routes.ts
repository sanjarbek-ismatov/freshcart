import express from 'express'
import categoryController from "../controllers/category.controller";
const categoryRoutes = express.Router()

categoryRoutes.get('/all', categoryController.getAll)
categoryRoutes.post('/create', categoryController.create)
categoryRoutes.put('/create/subcategory/:slug', categoryController.addSubCategory)
export default categoryRoutes