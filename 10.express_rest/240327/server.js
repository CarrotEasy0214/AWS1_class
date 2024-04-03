const express = require("express");
// const http = require("http");

const app = express(); // net.createServer() << ??
// const http = require("http");
// const server = http.createServer((req, res) => {
//   res.end("now testing http createServer");
// });

app.get("/", (req, res) => {
  console.log(req.headers);
  console.log(req.url); // path
  console.log(req.path);
  console.log(req.query.id); //Querystring (물음표 뒤에 붙는것)
  console.log(req.body);
  res.end("now testing express server");
});

app.listen(3000, () => {
  console.log("express server open of 3000 port");
}); // server.listen(port, ip , callbackFn) 아이피는 로컬호스트에서 확인할예정이기떄문에 기본설정되어있다.

// server.listen(3080, () => {
//   console.log("http server open of 3080 port");
// });
