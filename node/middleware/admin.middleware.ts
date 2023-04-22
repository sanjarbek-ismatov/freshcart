import {Request, Response, NextFunction} from "express";
import Admin from "../models/admin.model";

export default async function adminMiddleware(req: Request, res: Response, next: NextFunction){

    const checkAdmin = await Admin.findOne({login: req.body.login})
    if(!checkAdmin) return res.status(403).send({code: 403, message: 'Siz noto\'g\'ri yo\'ldasiz'})
    if(checkAdmin.password !== req.body.password)
        return res.status(400).send({code: 400, message: "Noto'g'ri parol"})

    next()
}