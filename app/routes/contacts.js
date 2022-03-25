const { Router } = require("express");

const contacts = require("../controllers/contacts.controller");
const origin = require("./../middleware/origin");

const router = Router();

router.get("/", origin, contacts.getAll);

router.get("/webhooks/", contacts.webhooks);

router.get("/:id", contacts.getById);

router.post("/", contacts.create);

router.put("/:id", contacts.update);

router.delete("/:id", contacts.delete);

module.exports = router;
