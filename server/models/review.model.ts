import mongoose from "mongoose";
import { ReviewType } from "../types";

const reviewSchema = new mongoose.Schema({
  vendorId: { type: mongoose.SchemaTypes.ObjectId, ref: "vendor" },
  productId: { type: mongoose.SchemaTypes.ObjectId, ref: "product" },
  clientId: { type: mongoose.SchemaTypes.ObjectId, ref: "user" },
  description: String,
  star: {
    type: Number,
    default: 0,
  },
  images: [String],
  date: {
    type: Date,
    default: function () {
      return new Date();
    },
  },
});
export const Review = mongoose.model<ReviewType>("review", reviewSchema);
