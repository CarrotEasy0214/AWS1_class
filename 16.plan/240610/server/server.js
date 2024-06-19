const express = require("express");
const MyRouter = require("./MyRouter");

const app = express();

const user = new MyRouter("/user"); // user 부분을 board로 바꾸면 끝 (send부분은 바꾸기)
user.init(app);
user.setCallbacks({
  login: (req, res) => {
    res.send("login");
  },
  logout: (req, res) => {
    res.send("logout");
  },
  regist: (req, res) => {
    res.send("regist");
  },
});
app.listen(3000, () => {
  console.log(3000, "server open");
});
