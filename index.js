const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser").json();
const simpleIcons = require("simple-icons");

const app = express();
app.use(cors());

const port = process.env.PORT || 8080;

const about = require("./data/about.json");
const portfolio = require("./data/portfolio.json");
const icons = require("./data/icon.json");

app.get("/", (req, res) => {
  res.send("It's Alive");
});

app.get("/icon", (req, res) => {
  try {
    const { name } = req.query;
    const icon = simpleIcons.get(name);
    if (!icon) {
      throw new Error(`"${name}" icon not exists.`);
    }
    icon.color = icons[icon.slug];
    icon.name = icons[icon.name];
    icon.color = res.status(200).json(icon);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
});

app.post("/icon", bodyParser, (req, res) => {
  try {
    const { name } = req.body;
    const icon = simpleIcons.get(name);
    if (!icon) {
      throw new Error(`"${name}" icon not exists.`);
    }
    icon.color = icons[icon.slug];
    icon.name = icons[icon.name];
    res.status(200).json(icon);
  } catch (error) {
    res.status(500).json({ error: error.toString() });
  }
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
