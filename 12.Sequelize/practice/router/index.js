const router = require("express").Router();

router.post("/api", require("./api"));
router.get("/", require("./view"));

module.exports = router;
