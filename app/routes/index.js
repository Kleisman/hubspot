const fs = require("fs");
const getOnlyName = (filename) => filename.split(".").shift();
const listRoutes = [];
fs.readdirSync(__dirname).filter((file) => {
  const cleanName = getOnlyName(file);
  const skip = ["index"].includes(cleanName);
  if (!skip) {
    listRoutes.push(cleanName);
  }
});

module.exports = listRoutes;
