const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const PORT = process.env.PORT || 3000;

app.set("port", PORT);
app.set("view engine", path.join(__dirname, "ejs"));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

module.exports = app;
