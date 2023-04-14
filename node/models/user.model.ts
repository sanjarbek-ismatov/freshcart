import mongoose, { Document, Schema } from "mongoose";
interface User extends Document {
  name: string;
  email: string;
  phone: string;
  image: string;
  username: string;
  password: string;
}
const userSchema: Schema<User> = new mongoose.Schema(
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
export const User = mongoose.model<User>("user", userSchema);
