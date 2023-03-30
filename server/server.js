// 1. IMPORTS
import express from "express";

const app = express();
const port = 3001;

//
//
// 2. MIDDLEWARE - Mitte

// USER REQUESTS
app.get("/", (req, res) => {
  res.send("Helloooo World!!!");
});

app.post("/user/signup", (req, res) => {
  res.send("I have signed up!!!");
});

app.post("/user/login", (req, res) => {
  res.send("I am logged in");
});

app.post("/user/logout", (req, res) => {
  res.send("I have logged out!");
});

//
//
// 3. LISTEN PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
