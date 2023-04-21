import Category from "../models/category.model";
import {Request, Response} from "express";
import {categoryValidator} from "../helpers/validator";
async function getAll(req: Request, res: Response){
    const allCategories = await Category.find()
    res.status(200).send(allCategories)
}
async function create(req: Request, res: Response){
        const category = await Category.findOne({slug: req.params.slug})
        if(category) return res.status(400).send({message: 'Allaqachon mavjud', code: 400})

        const {error} = categoryValidator(req.body)
    if(error) return res.status(400).send({code: 400, message: error.details[0].message})
        const newCategory = await Category.create(req.body)
        await newCategory.save()

    res.status(201).send({code: 201, message: 'Yaratildi'})}
async function addSubCategory(req: Request, res: Response){
    const foundedCategory = await Category.findOne({slug: req.params.slug})
    if(!foundedCategory) return res.status(404).send({code: 404, message: 'Mavjud emas kategoriya'})
    foundedCategory.subCategories.push(req.body)
    await foundedCategory.save()
    res.status(200).send({code: 200, message: 'Kategoriya qo\'shildi'})
}
export default {getAll, create, addSubCategory}