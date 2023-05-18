// Assuming you have Jest installed and configured in your project

import request from "supertest"; // For making HTTP requests to test the API
import { app } from "../server"; // Assuming your Express app is exported as 'app'
import { User } from "../models/user.model";
import mongoose from "mongoose"; // Assuming you have a User model defined
describe("User Controller Tests", () => {
  const connection = mongoose.createConnection(process.env.MONGO_URL);
  let createdUser; // To store the created user ID for cleanup

  beforeAll(async () => {
    // Set up any necessary test data before running the tests
    // For example, you might connect to a test database and create a user

    createdUser = await User.create({
      username: "testuser",
      email: "test@example.com",
      password: "testpassword",
    });
  });

  afterAll(async () => {
    // Clean up the test data after running the tests
    // For example, you might delete the created user and disconnect from the test database
    await User.deleteMany();
    await connection.close();
  });

  describe("signUpController", () => {
    it("should create a new user and return 201 status code", async () => {
      const response = await request(app).post("/signup").send({
        username: "newuser",
        email: "newuser@example.com",
        password: "newpassword",
      });

      expect(response.status).toBe(201);
      expect(response.body.code).toBe(201);
      expect(response.body.message).toBe("Bajarildi");
    });

    it("should return 400 status code if validation fails", async () => {
      const response = await request(app).post("/signup").send({
        username: "newuser",
        email: "newuser@example.com",
        password: "short", // Assuming this is an invalid password length
      });

      expect(response.status).toBe(400);
      expect(response.text).toContain("Validation error");
    });

    // Add more test cases for different scenarios
  });

  describe("loginController", () => {
    it("should log in the user and return 200 status code", async () => {
      const response = await request(app).post("/login").send({
        email: "test@example.com",
        password: "testpassword",
      });

      expect(response.status).toBe(200);
      expect(response.body.code).toBe(200);
      expect(response.body.message).toBe("Bajarildi");
      expect(response.headers["x-token"]).toBeDefined();
    });

    it("should return 404 status code if user is not found", async () => {
      const response = await request(app).post("/login").send({
        email: "unknown@example.com",
        password: "testpassword",
      });

      expect(response.status).toBe(404);
      expect(response.body.code).toBe(404);
      expect(response.body.message).toBe("Foydalanuvchi topilmadi!");
    });

    // Add more test cases for different scenarios
  });

  describe("getInfo", () => {
    it("should return the user information", async () => {
      const response = await request(app)
        .get("/info")
        .set("Authorization", `Bearer ${getToken()}`); // Assuming you have a function to get a valid token

      expect(response.status).toBe(200);
      expect(response.body).toEqual(createdUser.toJSON());
    });

    // Add more test cases for different scenarios
  });

  describe("addToCart", () => {
    it("should add an item to the user cart", async () => {
      const item = { name: "Item 1", price: 10 };

      const response = await request(app)
        .post("/cart")
        .set("Authorization", `Bearer ${getToken()}`)
        .send(item);

      expect(response.status).toBe(200);
      expect(response.body.code).toBe(200);
      expect(response.body.message).toBe("Ok");

      // Assert that the item is added to the user's cart in the database
      const updatedUser = await User.findById(createdUser._id);
      expect(updatedUser.cart).toContainEqual(item);
    });

    // Add more test cases for different scenarios
  });

  describe("updateUserInfo", () => {
    it("should update the user information", async () => {
      const updatedInfo = {
        username: "updateduser",
        email: "updated@example.com",
      };

      const response = await request(app)
        .put("/info")
        .set("Authorization", `Bearer ${getToken()}`)
        .send(updatedInfo);

      expect(response.status).toBe(200);
      expect(response.text).toBe("Yeah");

      // Assert that the user information is updated in the database
      const updatedUser = await User.findById(createdUser._id);
      expect(updatedUser.username).toBe(updatedInfo.username);
      expect(updatedUser.email).toBe(updatedInfo.email);
    });

    // Add more test cases for different scenarios
  });
});
