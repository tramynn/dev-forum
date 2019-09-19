require("dotenv").config();
const express = require("express");
const app = express();
const authController = require("./controllers/authController");
const postsController = require("./controllers/postsController");
const { SERVER_PORT } = process.env;

// auth endpoints
app.get("/auth/user", authController.getUser);
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);
app.post("/auth/logout", authController.logout);

// forum endpoints

// post endpoints
app.get("/api/forums");
app.get("/api/posts/:topic");
app.post("/api/posts/:topic");
app.delete("/api/posts/:id");

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on PORT: ${SERVER_PORT}`);
});
