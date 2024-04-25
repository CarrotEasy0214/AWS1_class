`mysql -u root -p`
`sudo service mysql start`

# 사용자(계정) 생성

```sql
create user 'aws' identified by '1234qwer';
```

## 비밀번호에 대한 내용

```sql
show variables like 'validate_password%';
```

## 데이터베이스 생성

```sql
create database AWS_TEST;
```

### 데이터베이스 확인

```sql
show databases;
```

## 사용자 권한 설정

```sql
grant all privileges on AWS_TEST.*to aws;
```

# 데이터베이스 세팅

- 사용할 데이터베이스를 설정해야 테이블을 생성, 수정할 수 있다.

```sql
use AWS_TEST;
```

# 테이블 생성

```sql
CREATE TABLE board_post (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(50) NOT NULL,
    board_category VARCHAR(10) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    nickname VARCHAR(20) NOT NULL UNIQUE,
    contents text NOT NULL,
    reply text NOT NULL
);

CREATE TABLE board (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    board_recommend INT UNSIGNED NOT NULL,
    board_post_id INT UNSIGNED NOT NULL,
    title VARCHAR(50) NOT NULL,
    category_id INT UNSIGNED NOT NULL,
    category_name VARCHAR(10) NOT NULL,
    created_at DATETIME DEFAULT NOW(),
    nickname VARCHAR(20) NOT NULL UNIQUE,
    reply_number INT UNSIGNED,
    img VARCHAR(20),
    FOREIGN KEY (category_id) REFERENCES category(id)
    ON UPDATE CASCADE
);

CREATE TABLE reply (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nickname VARCHAR(20) NOT NULL UNIQUE,
    reply_created_at DATETIME DEFAULT NOW(),
    reply_contents text NOT NULL
);

CREATE TABLE user_record (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nickname VARCHAR(20) NOT NULL UNIQUE,
    user_level INT UNSIGNED NOT NULL,
    exp INT UNSIGNED NOT NULL
);

CREATE TABLE user_information (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    email varchar(50) NOT NULL UNIQUE,
    user_password varchar(20) NOT NULL,
    nickname VARCHAR(20) NOT NULL UNIQUE
);

CREATE TABLE ward (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    post_id INT UNSIGNED ,
    user_id INT UNSIGNED ,
    nickname VARCHAR(20) NOT NULL UNIQUE,
    ward_ox boolean,
    FOREIGN KEY (post_id) REFERENCES board_post(id)
    ON UPDATE CASCADE
    ON DELETE SET NULL,
    FOREIGN KEY (user_id) REFERENCES user_information(id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

CREATE TABLE category (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    category_names INT UNSIGNED NOT NULL UNIQUE
);

CREATE TABLE post_recommend (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    post_id INT UNSIGNED ,
    user_id INT UNSIGNED ,
    nickname VARCHAR(20) NOT NULL UNIQUE,
    post_recommend boolean,
    FOREIGN KEY (post_id) REFERENCES board_post(id)
    ON UPDATE CASCADE
    ON DELETE SET NULL,
    FOREIGN KEY (user_id) REFERENCES user_information(id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

CREATE TABLE reply_recommend (
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    reply_id INT UNSIGNED ,
    user_id INT UNSIGNED ,
    nickname VARCHAR(20) NOT NULL UNIQUE,
    reply_recommend boolean,
    FOREIGN KEY (reply_id) REFERENCES reply(id)
    ON UPDATE CASCADE
    ON DELETE SET NULL,
    FOREIGN KEY (user_id) REFERENCES user_information(id)
    ON UPDATE CASCADE
    ON DELETE SET NULL
);

ALTER TABLE test ADD COLUMN created_at DATETIME;


ALTER TABLE 테이블명 ADD COLUMN 컬럼명 타입;
ALTER TABLE 테이블명 MODIFY COLUMN 컬럼명 타입;
ALTER TABLE 테이블명 DROP COLUMN 컬럼명 타입;
```

## insert

```sql
DESC test;
```

```sql
INSERT INTO test(id, title, name, nick) VALUES(1, '이름', '닉네임');
```

## select

- DML에 포함하지 않고 DQL, Data Query Language에 포함시키는 경우도 있다.

```sql
SELECT * FROM test;
SELECT id, nick FROM test WHERE id=2;
SELECT * FROM test WHERE nick LIKE '닉%';
SELECT * FROM test WHERE nick LIKE '닉__';
SELECT * FROM test WHERE nick LIKE '닉%' AND id > 3;
SELECT * FROM test WHERE nick LIKE '닉%' OR id > 3;
SELECT * FROM test WHERE nick LIKE '%닉%';
```
