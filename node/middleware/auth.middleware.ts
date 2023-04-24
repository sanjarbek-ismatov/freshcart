import {NodeRequest} from "../types";
import {NextFunction, Response, Request} from "express";
import {User} from "../models/user.model";
import {tokenParser} from "../helpers/tokengenerator";

export default async function authMiddleware(req: NodeRequest, res: Response, next: NextFunction){
    const token = req.headers['x-token']
    if(typeof token !== 'string') return res.status(401).send({code: 401, message: 'Token mavjud emas'})
    const {email} = tokenParser(token)
    const user = await User.findOne({email})
    if(!user) return res.status(404).send({code: 404, message: 'Xato login'})
    req.user = user
    next()
}