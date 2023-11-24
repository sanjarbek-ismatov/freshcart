import { Request } from "express";
import { Document, Types } from "mongoose";

interface CategoryType {
  name: string;
  slug: string;
  group: string;
}

interface ProductType<T> {
  _id: string;
  name: string;
  slug: string;
  price: number;
  category: CategoryType;
  description: string;
  rating: number;
  images: string[];
  reviews: T[];
  weight: number;
  vendor: Document<unknown, {}, VendorType> &
    Omit<VendorType & { _id: Types.ObjectId }, never>;
  guarantee: number;
  isInArchive: boolean;
  date: Date;
  discounts: Types.ObjectId[];
}

type ProductTypeWithIds = ProductType<Types.ObjectId>;
type ProductTypeWithData = ProductType<ReviewType>;

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
  address: AddressType;
  payment: {
    cardNumber: string;
  };
  username: string;
  password: string;
  liked: ProductTypeWithIds[];
  cart: {
    id: string;
    count: number;
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
  address: AddressType;
  image: string;
  banner: string;
  products: ProductTypeWithIds[];
  annualIncome: number;
}

interface AddressType {
  zipCode: number;
  state: string;
  location: string;
}

interface OrderType {
  slug: string;
  vendorId: VendorType;
  productId: ProductTypeWithIds;
  clientId: UserType;
  count: number;
  status: "pending" | "processing" | "rejected" | "finished";
  date: Date;
  totalPrice: number;
  shippingAddress: AddressType;
  billingAddress: AddressType;
  paymentMethod: string;
  orderNotes: string;
}

interface DiscountType {
  percent: number;
}

interface ReviewType {
  vendorId: string;
  productId: string;
  clientId: string;
  description: string;
  star: number;
  images: string[];
  date: string;
}

export type {
  CategoryType,
  ProductType,
  AdminType,
  NodeRequest,
  UserType,
  VendorType,
  OrderType,
  AddressType,
  ReviewType,
  ProductTypeWithData,
  ProductTypeWithIds,
  DiscountType,
};
