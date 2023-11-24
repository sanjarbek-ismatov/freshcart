import mongoose, { Schema } from "mongoose";
import { CategoryType } from "../types";

export const categorySchema: Schema<CategoryType> = new mongoose.Schema({
  name: String,
  slug: String,
  group: String,
});

const Category = mongoose.model<CategoryType>("category", categorySchema);

export default Category;
