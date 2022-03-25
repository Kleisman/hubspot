const app = require("./app");
const { Router } = require("express");
const listRoutes = require("./app/routes");
const router = Router();

listRoutes.forEach((route) => {
  app.use(`/${route}`, require(`./app/routes/${route}`));
});

router.get(`*`, (req, res) => {
  res.status(404);
  res.send({
    error: "No found",
  });
});

app.use(router);

app.get("/", (req, res) => {
  res.render("index.ejs", { routes: listRoutes });
});

app.listen(app.get("port"), () => {
  console.log("listening on port: ", app.get("port"));
});
