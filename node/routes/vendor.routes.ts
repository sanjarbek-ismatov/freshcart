import express from 'express'
import vendorController from "../controllers/vendor.controller";
import {upload} from "../models/gridfs.model";
import {vendorCheckMiddleware} from "../middleware/catch.middleware";
const vendorRoute = express.Router()
vendorRoute.post('/register',upload.fields([{name: 'image'}, {name: 'banner'}]), vendorController.register)
vendorRoute.post('/login', vendorController.login)
export default vendorRoute