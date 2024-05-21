const router = require("express").Router();

router.get("/", (req, res) => {
  console.log(req.query);
  res.data = { ...res.data, user: req.cookies.user, regist: req.query.regist };
  res.render("index", res.data);
});

module.exports = router;
