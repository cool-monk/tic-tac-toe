const express = require("express");
const router = express.Router();
const RoomsController = require("../src/Controller/Room");

router.post("/add", RoomsController.addRoom);

module.exports = router;
