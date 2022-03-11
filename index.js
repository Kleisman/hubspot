const app = require("./app");

const contactRouter = require("./routes/contacts.routes");

app.use("/contacts", contactRouter);

app.get("/", (req, res) => {
  res.render("index.ejs", { routes: ["/contacts"] });
});

app.listen(app.get("port"), () => {
  console.log("listening on port", app.get("port"));
});
