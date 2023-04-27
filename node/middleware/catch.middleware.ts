import {NodeRequest} from "../types";
import {NextFunction, Response} from "express";
import {Vendor} from "../models/vendor.model";

async function vendorCheckMiddleware(req: NodeRequest, res: Response, next: NextFunction){
    const checkVendor = await Vendor.findOne({slug: req.body.slug})
    console.log(checkVendor, req.body)
    if(checkVendor) return res.status(400).send({code: 400, message: 'Nom allaqachon mavjud'})
    next()
}
export {vendorCheckMiddleware}