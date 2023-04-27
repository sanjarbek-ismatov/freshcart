import express from 'express'
import productController from "../controllers/product.controller";
import {upload} from "../models/gridfs.model";
import {vendorCheckMiddleware} from "../middleware/catch.middleware";
const productRoute = express.Router()
productRoute.get('/all', productController.getAll)
productRoute.post('/create', [vendorCheckMiddleware, upload.array('images')], productController.create)
export default  productRoute