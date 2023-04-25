import mongoose, { Schema } from "mongoose";
import {UserType} from "../types";

const userSchema: Schema<UserType> = new mongoose.Schema(
  {
    name: String,
    email: String,
    phone: String,
    image: String,
    username: {
      type: String,
      unique: true,
    },
    password: String,
  },
  { collection: "users" }
);
export const User = mongoose.model<UserType>("user", userSchema);
