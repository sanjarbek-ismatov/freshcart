import Category from "../models/category.model";
import {Request, Response} from "express";
async function getAll(req: Request, res: Response){
    const allCategories = await Category.find()
    res.status(200).send(allCategories)
}
async function create(req: Request, res: Response){
        const category = await Category.findOne({slug: req.params.slug})
        if(category) return res.status(400).send({message: 'Allaqachon mavjud', code: 400})

        const newCategory = new Category(req.body)
    res.status(201).send('Yaratildi')}