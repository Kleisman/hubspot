const { Router } = require("express");

const controller = require("../controllers/sites");
const origin = require("./../middleware/origin");

const router = Router();

router.get("/", origin, controller.getAll);

router.get("/:id", controller.getById);

router.post("/", controller.create);

router.put("/:id", controller.update);

router.delete("/:id", controller.delete);

module.exports = router;
