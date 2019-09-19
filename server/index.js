require("dotenv").config();
const express = require("express");
const app = express();
const { SERVER_PORT } = process.env;

// auth endpoints
app.get("/auth/user");
app.post("/auth/register");
app.post("/auth/login");
app.post("/auth/logout");

// forum endpoints

// post endpoints
app.get("/api/forum");
app.get("/api/posts/:topic");
app.post("/api/posts/:topic");
app.delete("/api/posts/:id");

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on PORT: ${SERVER_PORT}`);
});
