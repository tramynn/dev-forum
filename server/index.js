require("dotenv").config();
const express = require("express");
const app = express();
const massive = require("massive");
const session = require("express-session");
const authController = require("./controllers/authController");
const postsController = require("./controllers/postsController");
const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env;

// middleware
app.use(express.json());

// session
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7
    }
  })
);

massive(CONNECTION_STRING).then(db => {
  app.set("db", db);
  console.log("db is connected :D");
});

// auth endpoints
app.get("/auth/user", authController.getUser);
app.post("/auth/register", authController.register);
app.post("/auth/login", authController.login);
app.post("/auth/logout", authController.logout);

// post endpoints
app.get("/api/topics", postsController.topics);
app.get("/api/posts/:topic", postsController.posts);
app.post("/api/posts/:topic", postsController.addPost);
app.delete("/api/posts/:id", postsController.deletePost);

app.listen(SERVER_PORT, () => {
  console.log(`Server listening on PORT: ${SERVER_PORT}`);
});
