const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

const about = require("./data/about.json");
const portfolio = require("./data/portfolio.json");

app.get("/", (req, res) => {
  res.send("It's Alive");
});

app.get("/about", (req, res) => {
  res.json(about);
});

app.get("/portfolio", (req, res) => {
  res.json(portfolio);
});

app.listen(port, () => {
  console.log(`Server on ${port}`);
});
