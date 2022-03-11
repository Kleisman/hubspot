const { Router } = require("express");

const contacts = require("../controllers/contacts.controller");

const router = Router();

router.get("/", contacts.getAll);

router.get("/webhooks/", contacts.webhooks);

router.get("/:id", contacts.getById);

router.post("/", contacts.create);

router.put("/", contacts.update);

router.delete("/:id", contacts.delete);

module.exports = router;
