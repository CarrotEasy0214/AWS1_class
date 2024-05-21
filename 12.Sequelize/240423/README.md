# Transaction

- 일의 최소 단위
- 일 자체가 끝나야 적용한다.

# 실습

### 테이블 생성 (9시14분)

```sql
CREATE TABLE user_crypto(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    user_id VARCHAR(50) UNIQUE NOT NULL,
    pw VARCHAR(64) NOT NULL,
    phone VARCHAR(13) NOT NULL
);
```

    - crypto : 암호화
        - encrypto | decrypto

```sql
CREATE TABLE user_info(
    id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(10) NOT NULL,
    nick VARCHAR(10) NOT NULL DEFAULT "무명",
    FOREIGN KEY(id) REFERENCES user_crypto(id)
);
```

### 데이터 입력(9시29분 이전)

```sql
START TRANSACTION;
INSERT INTO user_crypto (user_id, pw, phone) VALUES ('test1', 'test1', 'test1');

INSERT INTO user_info(name, nick) VALUES('test1', 'test1');
COMMIT;

SELECT * FROM user_crypto;
SELECT * FROM user_info;

START TRANSACTION;
INSERT INTO user_crypto (user_id, pw, phone) VALUES ('test2', 'test2', 'test2');
INSERT INTO user_info(name) VALUES('test3');

ROLLBACK
```

- START TRANSACTION 을 하면 COMMIT 하기 전까지는 다른기기에서 데이터가 출력안됨

# Join

- 하나의 테이블만 가져오는 것이 아니라 2개 이상의 테이블을 하나의 목록 (테이블)로 가져올 수 있게 해준다.

```sql
SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id;

SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id WHERE user_info.id IS NULL;

SELECT user_crypto.*, user_info.* FROM user_crypto INNER JOIN user_info ON user_crypto.id=user_info.id;

SELECT uc.id AS "번호", uc.user_id AS "아이디", uc.pw AS "비밀번호", uc.phone, ui.name, ui.nick FROM user_crypto AS uc INNER JOIN user_info AS ui ON uc.id=ui.id;

SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id UNION SELECT user_crypto.*, user_info.* FROM user_crypto RIGHT JOIN user_info ON user_crypto.id=user_info.id WHERE user_crypto.id IS NULL; --합집합

SELECT user_crypto.*, user_info.* FROM user_crypto LEFT JOIN user_info ON user_crypto.id=user_info.id WHERE user_info.id IS NULL UNION SELECT user_crypto.*, user_info.* FROM user_crypto RIGHT JOIN user_info ON user_crypto.id=user_info.id WHERE user_crypto.id IS NULL; --합집합-교집합

select * from user_crypto order by id DESC;

select * from user_crypto order by id ASC;

select * from user_crypto order by id ASC, user_id DESC LIMIT 1,2; --리미트 어디서부터셀지,몇개 불러올지

-- SELECT address. COUNT(*) AS cnt FROM user_info GROUP BY address HAVING cnt > 1;

-- SELECT address. COUNT(*) AS cnt FROM user_info GROUP BY address HAVING cnt = 1;


```

# 동기화 비동기화

- 동기화는 한번에 하나만 작업
- 비동기화는 한번에 다중작업 (자바 mysql)
- 다음작업을위해 작업대기하면 await
- then 은 콜백함수를 넣어줌 / promise가 끝날때 까지는 대기
