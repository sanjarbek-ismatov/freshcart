import mongoose, {Schema} from 'mongoose'
import {Category} from "../types";
const categorySchema: Schema<Category> = new mongoose.Schema({
    name: String,
    slug: String,
    subCategories: [{name: String, slug: String}]
})

const Category = mongoose.model<Category>('Category', categorySchema)

export default Category