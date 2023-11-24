import Category from "../models/category.model";
import { Request, Response } from "express";
import { categoryValidator } from "../helpers/validator";

async function getAll(req: Request, res: Response) {
  const allCategories = await Category.find();
  const groups = new Set(allCategories.map((e) => e.group));
  const result = Array.from(groups).map((e) => {
    const subs = allCategories.filter((el) => el.group === e);
    return { name: e, subCategories: subs };
  });
  res.status(200).send(result);
}

async function create(req: Request, res: Response) {
  const category = await Category.findOne({ slug: req.params.slug });
  if (category)
    return res.status(400).send({ message: "Allaqachon mavjud", code: 400 });

  const { error } = categoryValidator(req.body);
  if (error)
    return res
      .status(400)
      .send({ code: 400, message: error.details[0].message });
  const newCategory = await Category.create(req.body);
  await newCategory.save();

  res.status(201).send({ code: 201, message: "Yaratildi" });
}

export default { getAll, create };
