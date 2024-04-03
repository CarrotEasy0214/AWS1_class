const net = require("net");

// TCP Socket 서버
// 다음주 월요일까지 하는 건 TCP Socket 서버를 사용해서
// HTTP를 구현할거다.
// TCP -> OSI 7 계층에서의 4계층(TCP VS UDP)
// HTTP -> OSI 7 계층에서의 7계층
// 5계층에 Session 계층, 연결을 유지하는 계층
// 연결이 끊어졌을 때

const body = `<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>게시판 목록</title>
  <link href="board.css" rel="stylesheet" />
</head>
<body>
  <div class="container">
    <section class="box">
      <div class="board_list_wrap">
        <table class="board_list">
          <caption>
            과정공지사항
          </caption>
          <thead class="th_wrap">
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>글쓴이</th>
              <th>작성일</th>
              <th>조회</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="num">5</td>
              <td class="title">
                <a href="#">[공지]훈련장려금 단위기간 안내</a>
              </td>
              <td>관리자</td>
              <td>2024-02-19</td>
              <td>777</td>
            </tr>
            <tr>
              <td class="num">4</td>
              <td class="title">
                <a href="#">[공지]결강 및 휴강일 안내 </a>
              </td>
              <td>관리자</td>
              <td>2024-02-19</td>
              <td>9999</td>
            </tr>
            <tr>
              <td class="num">3</td>
              <td class="title">
                <a href="#">[국민취업제도] 훈련수당 신청안내</a>
              </td>
              <td>관리자</td>
              <td>2024-02-19</td>
              <td>7</td>
            </tr>
            <tr>
              <td class="num">2</td>
              <td class="title">
                <a href="#">[공지]직권입력 안내(출석인정)</a>
              </td>
              <td>관리자</td>
              <td>2024-02-19</td>
              <td>7</td>
            </tr>
            <tr>
              <td class="num">1</td>
              <td class="title">
                <a href="#">[공지]출결안내</a>
              </td>
              <td>관리자</td>
              <td>2024-02-19</td>
              <td>7</td>
            </tr>
          </tbody>
        </table>

        <div class="write">
          <a href="#" class="write_btn">글쓰기</a>
        </div>
        <div class="page">
          <a href="#" class="pNum">1</a>
        </div>
      </div>
    </section>
  </div>
</body>
</html>`;

const response = `HTTP/1.1 200 Ok
Content-Type: text/html
Content-Length: ${body.length}

${body}`;

const server = net.createServer((client) => {
  // 연결 됐으니 데이터 받을 준비가 필요하다.
  client.on("data", (data) => {
    client.setEncoding("utf8");
    console.log(new Date());
    console.log(data);
    console.log(data.toString());
    console.log(data.toString().split("\r\n")[0].split(" "));

    client.write(response);
    client.end();
  });
});

server.on("error", (err) => {
  console.log("err : " + err);
});

server.listen(3000, "127.0.0.1", () => {
  console.log("server open");
});
