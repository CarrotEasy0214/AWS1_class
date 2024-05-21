시퀄라이저 db연결 시험
컬럼명이 다를수있어서 수정이 필요할수있음

- npm init
- npm i express morgan dotenv cookie-parser ejs mysql2 sequelize
- npm i -D nodemon sequelize-cli
- npx sequelize init
- sudo service mysql start

- config json 에서 수정

"username": "aws",
"password": "1234qwER!@",
"database": "AWS_TEST",

- server.js 작성 후 router, public 폴더 생성
- router에 index.js 생성 후 모듈로 라우터 설정

  - router에 api, view 하위폴더 생성 후 모듈로 라우터설정

- public에 index.ejs 생성 후 include 이용해 add-box.ejs 추가생성한것들 연결하기
  - regist.ejs 회원가입등록 연결

# 컬럼생성

- sequelize model:create --name post --attributes "title:string, writer:string"

# 컬럼제약조건생성

- /models/post.js 파일에서 컬럼에 제약조건을 추가

module.exports = (sequelize, DataTypes) => {
var post = sequelize.define('post', {
title: {
type: DataTypes.STRING,
allowNull: false,
},
writer: {
type: DataTypes.STRING,
allowNull: false,
}
});
return post;
};

- /migrations/create-post.js 파일에서도 모델 정의를 일치

module.exports = {
up: (queryInterface, Sequelize) => {
return queryInterface.createTable('posts', {
id: {
allowNull: false,
autoIncrement: true,
primaryKey: true,
type: Sequelize.INTEGER
},
title: {
type: Sequelize.STRING,
allowNull: false,
},
writer: {
type: Sequelize.STRING,
allowNull: false,
},
createdAt: {
allowNull: false,
type: Sequelize.DATE
},
updatedAt: {
allowNull: false,
type: Sequelize.DATE
}
});
},
down: (queryInterface, Sequelize) => {
return queryInterface.dropTable('posts');
}
};

# DB에 반영하기 위해, migrate 명령어를 실행하고, 서버를 실행

- sequelize db:migrate

- npm start

- desc posts; (테이블 생성됐는지 확인)

# view 폴더에 게시글 페이지 생성

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<h1>목록 추가하기</h1>
<hr>

<form action="/board" method="POST">
    <table>
        <tr>
            <td><input type="text" name="inputTitle" placeholder="제목을 입력하세요."></td>
        </tr>
        <tr>
            <td><input type="text" name="inputWriter" placeholder="작성자를 입력하세요."></td>
        </tr>
    </table>
    <input type="submit" value="전송하기">
</form>
</body>
</html>

# /routes/index.js 에서 경로등록

const express = require('express');
const router = express.Router();

router.get('/board', function(req, res, next) {
res.render('show');
});

module.exports = router;

# 서버를 실행하여, 브라우저에서 http://localhost:3000/board 으로 접근한 후, 뷰 페이지가 잘 보이는지 확인

# 데이터 추가하기 - INSERT

- /routes/index.js

const express = require('express');
const models = require('../models');
const router = express.Router();

router.get('/board', function(req, res, next) {
res.render('show');
});

router.post('/board', function(req, res, next) {
let body = req.body;

    models.post.create({
        title: body.inputTitle,
        writer: body.inputWriter
    })
        .then( result => {
            console.log("데이터 추가 완료");
            res.redirect("/board");
        })
        .catch( err => {
            console.log("데이터 추가 실패");
        })

});

module.exports = router;

# http://localhost:3000/board 에서 실제로 데이터를 추가해보고 데이터가 추가되었는지 확인

# 데이터 조회하기 - SELECT

- /views/show.ejs (show.ejs 파일에서 데이터들을 출력하는 <table> 요소를 추가)

<table>
    <tr>
        <td>제목</td>
        <td>작성자</td>
        <td>작성일</td>
    </tr>
    <% for(let post of posts) { %>
        <tr>
            <td><%= post.title %></td>
            <td><%= post.writer %></td>
            <td><%= post.createdAt %></td>
        </tr>
    <% } %>
</table>

# 데이터를 보내기 위해 /board경로에 GET으로 요청되는 라우터 미들웨어를 수정

- /router/index.js

router.get('/board', function(req, res, next) {
models.post.findAll().then( result => {
res.render("show", {
posts: result
});
});
});

# posts 테이블의 모든 데이터를 출력하기 위해 findAll() 메서드를 호출

router.get('/board', function(req, res, next) {
models.post.findAll({
where: {writer: "victolee"}
})
.then( result => {
res.render("show", {
posts: result
});
})
.catch(function(err){
console.log(err);
});
});

## where 대신 attributes, order 등의 조건을 추가가능

- attributes: ["title"]
  - title 컬럼만 조회
- order: [["id", "DESC"]]
  -id를 내림차순으로 정렬

# http://localhost:3000/board 접속하여 작동체크

# 데이터 업데이트 - UPDATE (이전수업내용 참고하기)

- /views/show.ejs - <table> 부분

<table>
    <tr>
        <td>제목</td>
        <td>작성자</td>
        <td>작성일</td>
    </tr>
    <% for(let post of posts) { %>
        <tr>
            <td><%= post.title %></td>
            <td><%= post.writer %></td>
            <td><%= post.createdAt %></td>
            <td><button ><a href="/board/<%=post.id%>">수정하기</a></button></td>
            
            <form action="/board/<%=post.id%>?_method=DELETE" method="post">
                <td><input type="submit" value="삭제하기"></input></td>
            </form>
        </tr>
    <% } %>
</table>

## 라우터에서 기존에 작성된 게시글의 정보를 반환

- /rotues/index.js

router.get('/edit/:id', function(req, res, next) {
let postID = req.params.id;

models.post.findOne({
where: {id: postID}
})
.then( result => {
res.render("edit", {
post: result
});
})
.catch( err => {
console.log("데이터 조회 실패");
});
});

# /views/edit.ejs 파일을 생성하여, 수정할 데이터를 입력하는 뷰 페이지를 작성

<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
<h1>목록 추가하기</h1>
<hr>

<form action="/board/<%= post.id %>?_method=PUT" method="post">
    <table>
        <tr>
            <td><input type="text" name="editTitle" value="<%= post.title %>"></td>
        </tr>
        <tr>
            <td><input type="text" name="editWriter" value="<%= post.writer %>"></td>
        </tr>
    </table>
    <input type="submit" value="전송하기">
</form>
</body>
</html>

# 데이터 삭제하기

- /views/index.js

<form action="/board/<%=post.id%>?_method=DELETE" method="post">
    <td><input type="submit" value="삭제하기"></input></td>
</form>

- /routes/index.js

router.delete('/board/:id', function(req, res, next) {
let postID = req.params.id;

models.post.destroy({
where: {id: postID}
})
.then( result => {
res.redirect("/board")
})
.catch( err => {
console.log("데이터 삭제 실패");
});
});

### 매개변수 받는방법 정리

클라이언트가 보낸 데이터를 라우터 미들웨어에서 받는 방법

URL 파라미터
ex) 라우터를 등록할 때 app.get( /post/:postid ) 으로 경로를 설정했다면, 클라이언트에서 "/post/3"으로 요청 시, req.params.postid == 3
req.params.변수명
이 방식은 게시글 수정과 삭제 할 때 사용했던 방법인데, URL에 동적인 데이터를 추가하는 방식
query 파라미터
ex) 클라이언트에서 "/post?postid=3"으로 요청 시, req.query.postid == 3
req.query.키
URL 파라미터 방식과 같이 URL을 통해서 데이터를 얻을 수 있지만, query string의 key 값을 받아올 수 있음
form 파라미터
ex) 클라이언트에서 input 태그의 name="title" 일 때, "victory"를 입력하고 전송 버튼을 누르면 req.body.title == victory
req.body.name이름
HTML form 태그를 통해 넘어온 데이터를 받는 방법

### 여러 개의 데이터 추가하기

bulkCreate()
