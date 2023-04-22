import express from 'express'
import productController from "../controllers/product.controller";
const productRoute = express.Router()
productRoute.get('/all', productController.getAll)
export default  productRoute