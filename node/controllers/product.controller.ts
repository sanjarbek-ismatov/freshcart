import {Request, Response} from "express";
import {Product} from "../models/product.model";
async function getAll(req: Request, res: Response){
    const products = await Product.find()
    res.status(200).send(products)
}
export default  {getAll}