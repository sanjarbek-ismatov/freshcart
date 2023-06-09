import mongoose, { Schema } from "mongoose";
import { AddressType, OrderType } from "../types";

const addressSchema: Schema<AddressType> = new mongoose.Schema({
  zipCode: Number,
  state: String,
  location: String,
});
const orderSchema: Schema<OrderType> = new mongoose.Schema({
  slug: String,
  vendorId: { type: mongoose.SchemaTypes.ObjectId, ref: "vendor" },
  productId: { type: mongoose.SchemaTypes.ObjectId, ref: "product" },
  clientId: { type: mongoose.SchemaTypes.ObjectId, ref: "user" },
  count: Number,
  status: {
    type: String,
    enum: ["pending", "processing", "rejected", "finished"],
    default: "pending",
  },
  date: {
    type: Date,
    default: function () {
      return new Date();
    },
  },
  totalPrice: Number,
  shippingAddress: {
    type: addressSchema,
  },
  billingAddress: {
    type: addressSchema,
  },
  paymentMethod: String,
  orderNotes: String,
});
export const Order = mongoose.model<OrderType>("order", orderSchema);
