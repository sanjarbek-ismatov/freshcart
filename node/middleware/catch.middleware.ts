import {NodeRequest} from "../types";
import {NextFunction, Response} from "express";
import {Vendor} from "../models/vendor.model";

async function vendorCheckMiddleware(req: NodeRequest, res: Response, next: NextFunction){
    const checkVendor = await Vendor.findOne({slug: req.body.slug})
    if(!checkVendor) return res.status(400).send({code: 400, message: 'Mavjud emas'})
    req.vendor = checkVendor
    next()
}
export {vendorCheckMiddleware}