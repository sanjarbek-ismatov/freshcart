interface ServerResponse<T> {
  // ok: boolean;
  message: string;
  // result: T;
  code: number;
  token?: string
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

interface Product {
  title: string;
  category: string[];
  stars: number;
  cost: string;
  bought: string;
  images: string[];
}
export type {
  ServerResponse,
  RequestRegisterForm,
  RequestLoginForm,
  User,
  Product,
};
