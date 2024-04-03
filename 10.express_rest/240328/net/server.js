const express = require("./lib/express");
//모듈 net 을 받아온다.
// net을 실행하고 그 결과를  net 상수에 할당한다.

const app = express();
const path = require("path");
// fs(File System)을 실행하고 그 결과를 fs 상수에 할당한다.

const boardRoot = path.join(__dirname, "..", "board");

app.get("/", (req, res) => {
  res.end("이건 어차피 한글 됨");
});

app.get("/board", (req, res) => {
  // res.send("게시판 구현중"); // end는 String만가능 send는 여러가지, 둘의 기능차이는없음
  res.sendFile(path.join(boardRoot, "board.html"));
});

app.get("/board.css", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.css"));
});

app.get("/board.js", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot, "board.js"));
});

app.listen(3001, () => {
  console.log("express server open of 3001 port");
});

module.exports = () => {
  return app;
};
