var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send({ Page: "Home Page" });
});

router.get("/go", function (req, res, next) {
  res.send({ go: "Page Go" });
});

module.exports = router;
