// routing
const express = require("express");
const router = express.Router();
const ctrl = require("./service");

router.get("/", ctrl.getUsers);
router.post("/", ctrl.createUsers);

module.exports = router;