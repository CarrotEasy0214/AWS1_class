// hash는 단방향 암호화를 이야기한다.
// hash : 칼질하다.
// 유일값으로 변경된다.
// - a => a1
// 언제 쓸까?
//  - 개인정보 저장할 때

import crypto from "crypto";
// 암호화에 대한 내장 모듈

const hashAlgorithm = crypto.createHash("sha256");
// hash 암호화 객체를 만든다. sha256은 hash 종류 중 하나.
const hashing = hashAlgorithm.update("비밀번호를 입력하세요.");
const hashedString = hashing.digest("hex");
console.log(hashedString);

const hashAlgorithm2 = crypto.createHash("sha256");
// hash 암호화 객체를 만든다. sha256은 hash 종류 중 하나.
const hashing2 = hashAlgorithm2.update("비밀번호를입력하세요.");
const hashedString2 = hashing2.digest("hex");
console.log(hashedString2);
// sha256 => 256bits => 32byte => 64자
// FF <- 1byte
// 2 ** 256 => 요즘은 컴퓨터처리속도가 빨라져서 전부 다 넣어두고 찾는 방법도 있음
// - 레인보우 테이블 (새로생김)

const hashAlgorithm3 = crypto.createHash("sha512");
const hashing3 = hashAlgorithm3.update("a");
const hashedString3 = hashing3.digest("hex");
console.log(hashedString3);

// 종류 : MD5, SHA-1, SHA-2(SHA-256), SHA-512

const salt = "sadfsafsadf";
const hashAlgorithm4 = crypto.createHash("sha512");
const hashing4 = hashAlgorithm4.update("a" + salt);
const hashedString4 = hashing4.digest("hex");
console.log(hashedString4);

// salt: 암호화에 있어서 의미 or 필요 없는 문자열을 더한다.
//  - 해커가 쉽게 암호를 추측할 수 없게 만든다.
//  - 각 솔트가 다 다르게 넣는 게 일반적이다.

// 키 스트레칭 : 해시화를 반복한다.
// pbkdf2, bcrypt, scrypt4
// bcrypt : 가장 기본적인 키 스트레칭 암호화 함수
// pbkdf2 : 가장 많이 사용되는 암호화 함수
// scrypt : 요즘 뜨는 함수

const salt2 = (await crypto.randomBytes(64)).toString("base64");
crypto.pbkdf2(
  "비밀번호를 입력", //암호화 할 데이터
  salt, // 소금
  100, // 반복 횟수
  64, // 암호화에 필요한 Bytes 길이
  "sha512", // 암호화 알고리즘
  (err, key) => {
    // 함수, 콜백 함수, pbkdf2 메서드가 언제 끝날지 모른다.
    console.log("key : ", key.toString("hex"));
  }
);

// key :  5a5ba1858fa3c8bf1c554a04beedd2ee929739613b45f391232a041d2be2976b4a10f3e6bc9cad3da3f38586fa4ee45e6663f1eb7aa7d833f39ecfac72f7c7b0
// key :  b0ced5c26769daa0b3acf07a6d0f1dcc33e61ff5c7944b7e5f776174303dee2e8ade7055ac469000a7bfc3c32e98315a6f3de680597421b5c058de6847b13597
// 1000번 돌린값과 100번 돌린값과 비교

// 비동기가 아니라 동기로 실행해야 편하다.(처리속도가 느려져 서버에서 늦게뜰경우)
const pbkdf2 = crypto.pbkdf2Sync(
  "비밀번호를 입력", //암호화 할 데이터
  salt, // 소금
  100, // 반복 횟수
  64, // 암호화에 필요한 Bytes 길이
  "sha512" // 암호화 알고리즘
);
console.log("pbkdf2 : ", pbkdf2.toString("hex"));

// Hash는 생각보다 중요한 개념이다.
// 다른언어에서 HashMap 이라는 개념이 존재함
