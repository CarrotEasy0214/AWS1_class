const router = require("express").Router();
const crypto = require("crypto");

const sessions = {};

// const salt = (await crypto.randomBytes(64)).toString("base64");

router.get("/set", (req, res) => {
  const id = Date.now();
  res.cookie("user", 1, {
    signed: true,
  });
  //   sessions["user"] = 1;
  sessions[id] = 1;

  res.send("setting session");
});

router.get("/get", (req, res) => {
  console.log(req.signedCookies.user);
  //   res.send(req.signedcookies.user);
  res.send({ user: sessions[req.signedCookies.user] });
});

module.exports = router;
