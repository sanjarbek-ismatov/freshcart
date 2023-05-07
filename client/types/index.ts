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
  city?: string;
  email: string;
  id: string;
  name: string;
  password: string;
  phone: string;
  temporary_token: string;
  username: string;
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
  dateOfManufacture: string;
}

interface Sort {
  count: number;
  sortBy: string;
}

export type {
  ServerResponse,
  RequestRegisterForm,
  RequestLoginForm,
  User,
  ProductType,
  Sort,
};
