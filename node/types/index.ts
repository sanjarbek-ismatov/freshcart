import { Request } from "express";
import {Document} from "mongoose";
import {Multer} from "multer";
interface CategoryType {
  name: string;
  slug: string;
  subCategories: string[];
}
interface ProductType {
  name: string;
  slug: string;
  price: number;
  category: string[];
  description: string;
  rating: number;
  images: string[];
  reviews: string[];
  weight: number;
  count: number;
  shop: string;
  guarantee: number;
  expirationData: string;
  dateOfManufacture: string;
}
interface AdminType {
  login: string;
  password: string;
}
interface NodeRequest extends Request  {
  user?: UserType;
  vendor?: string;
  admin?: boolean;
}
interface UserType extends Document {
  name: string;
  email: string;
  phone: string;
  image: string;
  username: string;
  password: string;
}
interface VendorType {
  name:     string;
  slug:     string;
  category: string[];
  sells:    number;
  stars:    number;
  phone: string;
  email: string;
  password: string;
  image: string;
  banner: string;
  products: ProductType[]
}
export type { CategoryType, ProductType, AdminType, NodeRequest, UserType, VendorType };
