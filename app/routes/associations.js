const { Router } = require("express");

const controller = require("../controllers/associations");
const origin = require("./../middleware/origin");

const router = Router();

router.get("/", origin, controller.getAll);

router.get("/types", origin, controller.getTypes);
router.get("/types/:from", origin, controller.getTypes);
router.get("/types/:from/:to", origin, controller.getTypes);

router.post("/", controller.create);
router.post("/masive", controller.createMasive);

router.delete("/", controller.delete);
router.delete("/masive", controller.deleteMasive);

module.exports = router;
