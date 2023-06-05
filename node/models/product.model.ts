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
  vendor: { type: mongoose.SchemaTypes.ObjectId, ref: "vendor" },
  guarantee: String,
  expirationData: String,
  dateOfManufacture: String,
  isInArchive: {
    type: Boolean,
    default: false,
  },
});
export const Product = mongoose.model<ProductType>("Product", productSchema);
