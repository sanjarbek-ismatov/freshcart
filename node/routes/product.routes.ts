import express from 'express'
import productController from "../controllers/product.controller";
import {upload} from "../models/gridfs.model";
import authMiddleware from "../middleware/auth.middleware";
const productRoute = express.Router()
productRoute.get('/all', authMiddleware, productController.getAll)
productRoute.post('/create', upload.array('images'), productController.create)
export default  productRoute