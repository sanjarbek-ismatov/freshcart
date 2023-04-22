import mongoose, {Schema} from 'mongoose'
import {CategoryType} from "../types";
const categorySchema: Schema<CategoryType> = new mongoose.Schema({
    name: String,
    slug: String,
    subCategories: [{name: String, slug: String}]
})

const Category = mongoose.model<CategoryType>('Category', categorySchema)

export default Category