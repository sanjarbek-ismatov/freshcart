import {Response} from "express";
import {NodeRequest} from "../types";
import {vendorValidator} from "../helpers/validator";
async function register(req: NodeRequest, res: Response){
    const {error} = vendorValidator(req.body)
    if(error) return res.status(400).send({code: 400, message: "Yaroqsiz forma"})
}
export default {register}