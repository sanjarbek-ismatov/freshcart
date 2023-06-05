interface ServerResponse<T> {
  // ok: boolean;
  message: string;
  // result: T;
  code: number;
  token?: string;
}

interface RequestRegisterForm {
  name: string;
  phone: string;
  email: string;
  username: string;
  password: string;
}

interface RequestLoginForm {
  email: string;
  password: string;
}

interface User {
  name: string;
  email: string;
  phone: string;
  image: string;
  city: string;
  username: string;
  password: string;
  liked: ProductType[];

  cart: {
    id: ProductType;
    count: number;
  }[];
}

interface VendorType {
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

interface CategoryType {
  name: string;
  slug: string;
  subCategories: {
    name: string;
    slug: string;
  }[];
}

interface VendorType {
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
  count: number;
  vendor: VendorType;
  guarantee: number;
  expirationData: string;
  dateOfManufacture: Date;
  isInArchive: boolean;
}

type Sort = "rating" | "date" | "low" | "high";

export type {
  ServerResponse,
  RequestRegisterForm,
  RequestLoginForm,
  User,
  ProductType,
  Sort,
  CategoryType,
  VendorType,
};
