import mongoose from "mongoose";

interface Site {
  title: string;
  description: string;
  image: string;
  logo: string;
}

const siteSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    image: String,
    logo: String,
  },
  { collection: "general" },
);
export const Site = mongoose.model<Site>("general", siteSchema);
