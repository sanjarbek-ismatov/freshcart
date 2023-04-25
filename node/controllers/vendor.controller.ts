import {Response} from "express";
import {NodeRequest} from "../types";
import {vendorValidator} from "../helpers/validator";
import {Vendor} from "../models/vendor.model";
import {tokenGenerator} from "../helpers/tokengenerator";
import {Multer} from "multer";
async function register(req: NodeRequest, res: Response){
    const {error} = vendorValidator(req.body)
    if(error) return res.status(400).send({code: 400, message: error.details[0].message})
    const newVendor = await Vendor.create(req.body)

   console.log(req.files['image'][0])
    // await newVendor.save()
    res.status(201).send({code: 201, message: 'Yaratildi'})
}
async function login(req: NodeRequest, res: Response){
    const checkVendor = await Vendor.findOne({email: req.body.email})
    if(!checkVendor) return res.status(404).send({code: 404, message: 'Topilmadi'})

    const token = tokenGenerator(checkVendor.email)
    res.status(200).setHeader('x-vendor-token', token).send({code: 200, message: 'Bajarildi'})
}

export default {register, login}