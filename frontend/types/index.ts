interface ServerResponse<T> {
  ok: boolean;
  message: string;
  result: T;
  code: number;
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
  city: string | null;
  email: string;
  id: string;
  name: string;
  password: string;
  phone: string;
  temporary_token: string;
  username: string;
}

export type { ServerResponse, RequestRegisterForm, RequestLoginForm, User };
