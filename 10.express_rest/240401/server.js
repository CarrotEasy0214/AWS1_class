const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config(); // dotenv를 읽어와준다. 작성한 파일을 쉽게 가져와줌

// console.log(process.env);

const app = express();

app.set("port", process.env.PORT || 3000);
// global.port = process.env.PORT;

app.use(morgan("dev")); //개발환경용
// app.use((req, res, next) => {  //use는 미들웨어
//   console.log(req.hostname);
//   next();
// });

app.use(express.urlencoded({ extended: false }));
// body parser (정보를 객체로 바꿔줌)
// 메서드 호출할 떄 객체가 들어가면 옵션을 의미함
// extended : 확장
//  - true | false
//  - true : 외부 라이브러리를 사용하여 작동한다. (qs library)
//  - false : Express가 갖고있는 body parser로 작동한다.(querystring module)
// quretystring을 파싱해준다라는 의미로해석할수있다. << form : Content-Type : x-www-form-urlencoded

app.use(express.json());
// Content-Type : application/json

app.use(express.static("public"))

app.get("/", (req, res) => {
  //   console.log(req.hostname); // 200 정상 304 중복 404 에러
  res.send("qwer");
});

app.listen(app.get("port"), () => {
  console.log(app.get("port") + "포트로 서버를 열었어");
});
