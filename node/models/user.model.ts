import mongoose, { Schema } from "mongoose";
import { UserType } from "../types";
import { addressSchema } from "./order.model";

const userSchema: Schema<UserType> = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    image: String,
    address: { type: addressSchema },
    username: {
      type: String,
      unique: true,
    },
    password: String,
    liked: [
      {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "product",
      },
    ],
    cart: [
      {
        id: {
          type: mongoose.SchemaTypes.ObjectId,
          ref: "product",
        },
        count: Number,
      },
    ],
  },
  { collection: "users" }
);
export const User = mongoose.model<UserType>("user", userSchema);
