var express = require("express");
var router = express.Router();
const UserController = require("../src/Controller/User");

/* GET users listing. */
router.post("/add", UserController.addUser);

router.post("/login", UserController.login);

module.exports = router;
