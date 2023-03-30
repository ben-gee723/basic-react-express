// 1. IMPORTS
import express from "express";
import cors from "cors";

const app = express();
const port = 3001;

// USE
app.use(cors());
app.use(express.json());

//
//
// 2. MIDDLEWARE - Mitte

// USER REQUESTS
app.get("/", (req, res) => {
  res.send("Helloooo World!!!");
});

// ?
app.post("/user/signup", (req, res) => {
  res.send("I have signed up!!!");
});

app.post("/user/login", (req, res) => {
  console.log("login attempt");
  res.send(req.body);
});

app.post("/user/logout", (req, res) => {
  console.log("logout attempt");
  res.send({ null: null });
});

//
//
// 3. LISTEN PORT
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
