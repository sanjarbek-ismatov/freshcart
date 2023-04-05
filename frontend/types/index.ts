interface ServerResponse<T> {
  ok: boolean;
  message: string;
  result: T;
  code: number;
}

interface RequestForm {
  name: string;
  phone: string;
  email: string;
  username: string;
  password: string;
}
export type { ServerResponse, RequestForm };
