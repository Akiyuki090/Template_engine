const express = require("express");
const exphbs = require("express-handlebars");
const app = express();

const port = 3000;

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/sobre", (req, res) => {
  res.render("sobre");
});

app.listen(port, () => {
  console.log(`Esta rodando na porta: ${port}`);
});
