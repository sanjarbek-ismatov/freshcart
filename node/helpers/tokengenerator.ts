import jwt from "jsonwebtoken";

export function tokenGenerator(email: string) {
  return jwt.sign({ email }, process.env.KEY || "");
}

export function tokenParser(token: string) {
  try {
    return jwt.verify(token, process.env.KEY || "") as any;
  } catch (e) {
    return { email: false };
  }
}