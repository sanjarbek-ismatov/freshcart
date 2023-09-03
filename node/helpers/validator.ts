import Joi from "joi";
import JoiPasswordComplexity from "joi-password-complexity";
import { CategoryType, ProductTypeWithIds, VendorType } from "../types";

export const registerValidator = (body: {
  name: string;
  username: string;
  email: string;
  phone: string;
  password: string;
}) => {
  const validator = Joi.object({
    name: Joi.string().required().min(3),
    username: Joi.string().required().min(3),
    email: Joi.string().required().min(3),
    phone: Joi.string().required().min(10),
    password: Joi.string().required().min(8),
  });
  const passwordComplexity = JoiPasswordComplexity(
    {
      max: 256,
      min: 8,
      symbol: 1,
      lowerCase: 1,
      upperCase: 1,
      numeric: 1,
    },
    "password"
  );
  const { error: errorBody } = validator.validate(body);
  const { error: errorPassword } = passwordComplexity.validate(body.password);
  if (errorBody) return errorBody;
  if (errorPassword) return errorPassword;
  else return null;
};

export const categoryValidator = (body: CategoryType) => {
  const validator = Joi.object({
    name: Joi.string().required(),
    slug: Joi.string().required().lowercase(),
    group: Joi.string(),
  });
  return validator.validate(body);
};
export const productValidator = (body: ProductTypeWithIds) => {
  const validator = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
    category: Joi.string().required(),
    description: Joi.string(),
    rating: Joi.number(),
    images: Joi.array().items(Joi.string()),
    reviews: Joi.array().items(Joi.string()),
    weight: Joi.number(),
    guarantee: Joi.string(),
    dateOfManufacture: Joi.string(),
  });
  return validator.validate(body);
};
export const vendorValidator = (body: VendorType, toUpdate?: boolean) => {
  const validator = Joi.object({
    name: toUpdate ? Joi.string() : Joi.string().required(),
    slug: toUpdate ? Joi.string() : Joi.string().required(),
    phone: Joi.string().pattern(/^\+\d+$/),
    email: Joi.string().email(),
    products: Joi.array().items(Joi.string()),
    password: toUpdate ? Joi.string() : Joi.string().required(),
    image: Joi.binary(),
    banner: Joi.binary(),
  });
  return validator.validate(body);
};