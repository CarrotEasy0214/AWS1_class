const express = require("express");

const app = express();

const path = require("path");

//path.join = 두개의 주소를 하나의 주소로 합쳐주는 명령어다. 예 : const htmlUrl = path.join(__dirname, "board.html");
const htmlUrl = path.join(__dirname, "board.html");
const Url = __dirname;

//POST http://localhost:3000/
//Path / method Post < 이걸 받았을떄 value 저장 < 변수 list

const list = [];

app.use(express.urlencoded({ extended: false }));

app.post("/writer", (req, res) => {
  console.log(req.body);
  list.push(req.body); //value
  console.log(list);
});

//http://localhost:3000/board.css
//PATH /board.css Method get < 이걸받았을때 css를줌

app.get("/board.css", (req, res) => {
  res.sendFile(path.join(Url, "board.css"));
});

//http://localhost:3000/board.js
//PATH /board.js METHOD get < 이걸 받았을 때 뭘 줄까? js

app.get("/board.js", (req, res) => {
  res.sendFile(path.join(Url, "board.js"));
});

//PATH / METHOD GET <이걸 받았을 때 뭘 줄까? html
app.get("/", (req, res) => {
  res.sendFile(htmlUrl);
});

// app.post("/getlist", (req, res) => {
//   res.send(JSON.stringify(list));
// });

app.listen(3000, () => {
  console.log(htmlUrl);
  console.log("board.js");
  console.log("server open!");
});
