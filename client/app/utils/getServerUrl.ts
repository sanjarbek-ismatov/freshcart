"use server";

function getServerUrl(): string {
  switch (process.env.NODE_ENV) {
    case "development":
      return "http://localhost:4000/api";
    case "production":
      return "https://ecommerce-uz.onrender.com";
    default:
      return "";
  }
}

export { getServerUrl };
