const express = require("express");
const path = require("path");
const { Router } = require("express");
const cors = require('cors');
const router = Router();
const app = express();

const PORT = process.env.PORT || 3000;

app.set("port", PORT);
app.set("view engine", path.join(__dirname, "ejs"));
app.use(express.json());
app.use(cors());
app.use(router);
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname,'public')))

module.exports = app;