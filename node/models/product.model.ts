import mongoose, { Schema } from "mongoose";
import { ProductTypeWithIds } from "../types";

const productSchema: Schema<ProductTypeWithIds> = new mongoose.Schema({
  name: String,
  slug: { type: String, unique: true },
  price: Number,
  category: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "category",
  },
  description: String,
  rating: Number,
  images: [String],
  reviews: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "review",
    },
  ],
  weight: Number,
  vendor: { type: mongoose.SchemaTypes.ObjectId, ref: "vendor" },
  isInArchive: {
    type: Boolean,
    default: false,
  },
  date: {
    type: Date,
    default: function () {
      return new Date();
    },
  },
});
export const Product = mongoose.model<ProductTypeWithIds>(
  "product",
  productSchema,
);
