const express = require("express");
const cookieParser = require("cookie-parser");

const router = require("./router");

const app = express();

app.use(cookieParser("test"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// Store : 저장공간
// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: "test",
//     name: "user-session", // connect.sid (기본값)
//     // store: new FileStore(),
//     store: new FileStore({
//       reapInterval: 10, // 파일을 10초 뒤에 삭제한다.
//       path: "./test-session",
//     }),
//     cookie: {
//       maxAge: 10 * 1000,
//     },
//   })
// );

app.use(router);

app.listen(3000, () => {
  console.log(3000, "server open");
});
