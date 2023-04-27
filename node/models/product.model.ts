import mongoose, { Schema } from "mongoose";
import { ProductType } from "../types";

const productSchema: Schema<ProductType> = new mongoose.Schema({
  name: String,
  slug: { type: String, unique: true },
  price: Number,
  category: [String],
  description: String,
  rating: Number,
  images: [String],
  reviews: [
    {
      type: [mongoose.SchemaTypes.ObjectId],
      ref: "reviews",
    },
  ],
  weight: Number,
  count: Number,
  vendor: mongoose.SchemaTypes.ObjectId,
  guarantee: Number,
  expirationData: String,
  dateOfManufacture: String,
});
export const Product = mongoose.model<ProductType>("Product", productSchema);
