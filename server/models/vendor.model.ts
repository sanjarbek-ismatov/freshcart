import mongoose, { Schema } from "mongoose";
import { VendorType } from "../types";
import { addressSchema } from "./order.model";

const vendorSchema: Schema<VendorType> = new mongoose.Schema({
  name: String,
  slug: String,
  category: [String],
  sells: Number,
  stars: { type: Number, default: 0 },
  phone: String,
  email: String,
  password: String,
  address: {
    type: addressSchema,
  },
  image: String,
  banner: String,
  products: [
    {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "product",
    },
  ],
  annualIncome: { type: Number, default: 0 },
});
export const Vendor = mongoose.model<VendorType>("vendor", vendorSchema);
