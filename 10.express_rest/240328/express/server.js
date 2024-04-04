const express = require("express");
const path = require("path");
// const http = require("http");

const app = express(); // net.createServer() << ??
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("now testing http createServer");
// });

const boardRoot = path.join(__dirname, "..", "board");
const boardRoot1 = path.join(__dirname, "..", "board1");

//Middleware

// app.use((req, res, next) => {
//   console.log("middleware");
//   next();
// });

app.use("/board", (req, res, next) => {
  //매서드 관계없이 path만 맞으면 다 실행함 , get,post,put,patch,delete<< Rest API의 method 모두 대응
  console.log("board middleware");
  //res.send("이건 어차피 한글 됨")  << express에서는 이렇게 쓰지말라고함
  next();
});

app.get("/", (req, res) => {
  res.send("이건 어차피 한글 됨");
});

app.get("/board1", (req, res) => {
  // res.send("게시판 구현중"); // end는 String만가능 send는 여러가지, 둘의 기능차이는없음
  res.sendFile(path.join(boardRoot1, "board.html"));
});

app.get("/board.css", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot1, "board.css"));
});

app.get("/board.js", (req, res) => {
  // res.send("게시판 구현중");
  res.sendFile(path.join(boardRoot1, "board.js"));
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

app.use("/test", (req, res, next) => {
  req.test = {};
  next();
});

app.use("/test", (req, res, next) => {
  req.test.a = 1;
  next();
});

app.use("/test", (req, res, next) => {
  req.test.b = "테스트중";
  next();
});

app.use("/test", (req, res) => {
  res.json(req.test);
});

app.all("/*", (req, res) => {
  res.send("구현 사항 없음");
}); // use랑 같은놈 << send,sendFile 등 데이터를 응답하기 위해 사용한다.

app.listen(3000, () => {
  console.log("express server open of 3000 port");
}); // server.listen(port, ip , callbackFn) 아이피는 로컬호스트에서 확인할예정이기떄문에 기본설정되어있다.

// server.listen(3080, () => {
//   console.log("http server open of 3080 port");
// });
