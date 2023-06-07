import { Request } from "express";
import { Document, Types } from "mongoose";

interface CategoryType {
  name: string;
  slug: string;
  subCategories: string[];
}

interface ProductType {
  _id: string;
  name: string;
  slug: string;
  price: number;
  category: string[];
  description: string;
  rating: number;
  images: string[];
  reviews: string[];
  weight: number;
  vendor: Document<unknown, {}, VendorType> &
    Omit<VendorType & { _id: Types.ObjectId }, never>;
  guarantee: number;
  expirationData: string;
  dateOfManufacture: string;
  isInArchive: boolean;
}

interface AdminType {
  login: string;
  password: string;
}

interface NodeRequest extends Request {
  user?: Document<unknown, {}, UserType> &
    Omit<UserType & { _id: Types.ObjectId }, never>;
  vendor?: Document<unknown, {}, VendorType> &
    Omit<VendorType & { _id: Types.ObjectId }, never>;
  admin?: boolean;
}

interface UserType extends Document {
  name: string;
  email: string;
  phone: string;
  image: string;
  city: string;
  username: string;
  password: string;
  liked: ProductType[];
  cart: {
    id: string;
  }[];
}

interface VendorType extends Document {
  name: string;
  slug: string;
  category: string[];
  sells: number;
  stars: number;
  phone: string;
  email: string;
  password: string;
  image: string;
  banner: string;
  products: ProductType[];
}

export type {
  CategoryType,
  ProductType,
  AdminType,
  NodeRequest,
  UserType,
  VendorType,
};
