import {NodeRequest} from "../types";
import {NextFunction, Response} from "express";
import {User} from "../models/user.model";
import {tokenParser} from "../helpers/tokengenerator";
import {Vendor} from "../models/vendor.model";

export async function authMiddleware(req: NodeRequest, res: Response, next: NextFunction){
    const token = req.headers['x-token']
    if(typeof token !== 'string') return res.status(401).send({code: 401, message: 'Token mavjud emas'})
    const {email} = tokenParser(token)
    const user = await User.findOne({email})
    if(!user) return res.status(404).send({code: 404, message: 'Xato login'})
    req.user = user
    next()
}
export async function vendorAuthMiddleware(req: NodeRequest, res: Response, next: NextFunction){
    const vendorToken = req.headers['x-vendor-token']
    if(typeof vendorToken !== 'string') return res.status(401).send({code: 401, message: 'Token kerak'})
    const {email} = tokenParser(vendorToken)
    const vendor = await Vendor.findOne({email})
    if(!vendor) return res.status(404).send({code: 404, message: 'Mavjud emas'})
    req.vendor = vendor
    next()
}
