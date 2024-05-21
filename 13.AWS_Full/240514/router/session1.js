const router = require("express").Router();
const session = require("express-session");
const FileStore = require("session-file-store")(session);

// board-session
router.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: "test",
    name: "board-session", // connect.sid (기본값)
    // store: new FileStore(),
    store: new FileStore({
      reapInterval: 10, // 파일을 10초 뒤에 삭제한다.
      path: "./board-session",
    }),
    cookie: {
      maxAge: 60 * 1000,
    },
  })
);

router.get("/set", (req, res) => {
  req.session.user = 1;
  console.log(req.session.id);
  res.send("setting session");
});

router.get("/get", (req, res) => {
  res.send({ user: req.session.user });
});

module.exports = router;
