import express from 'express'
import productController from "../controllers/product.controller";
import {upload} from "../models/gridfs.model";
const productRoute = express.Router()
productRoute.get('/all', productController.getAll)
productRoute.post('/create', upload.array('images'), productController.create)
export default  productRoute