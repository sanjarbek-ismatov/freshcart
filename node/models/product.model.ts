import mongoose, {Schema} from 'mongoose'
import {ProductType} from "../types";



const productSchema: Schema<ProductType> = new mongoose.Schema({
    name: String,
    slug: {type: String, unique: true},
    price: Number,
    category: [String],
    description: String,
    rating: Number,
    images: [mongoose.SchemaTypes.ObjectId],
    reviews: [{
        type: [mongoose.SchemaTypes.ObjectId],
        ref: 'reviews'
    }],
    weight: Number,
    count: Number,
    shop: mongoose.SchemaTypes.ObjectId,
    guarantee: Number,
    expirationData: String,
    dateOfManufacture: String
})
const Product = mongoose.model('Product', productSchema)
