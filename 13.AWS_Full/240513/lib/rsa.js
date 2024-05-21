// 비대칭키 양방향 암호화
// 키가 2개가 필요하다.
//  - AWS EC2 접근 시 사용한 방법과 동일
// - pem(mac), ppk(putty)
// pem 키를 만들어보자
//  - openssl : 라이브러리
// openssl genrsa -out privatekey.pem
// genrsa => rsa를 generate 생성하다.
// -out => 파일로 내보내달라
// openssl rsa -in ./pem/privatekey.pem -out ./pem/publickey.pem -pubout
import crypto from "crypto";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const publickey = fs.readFileSync(path.join(__dirname, "../pem/publickey.pem"));
const privatekey = fs.readFileSync(
  path.join(__dirname, "../pem/privatekey.pem")
);
console.log(publickey);
console.log(privatekey);

const encryptPublicRSA = (text) => {
  const encrypted = crypto.publicEncrypt(publickey, text);
  return encrypted.toString("hex");
};
// console.log(encryptPublicRSA("입력해봅시다."));

const encryptPrivateRSA = (text) => {
  const buf = Buffer.from(text);
  const encrypted = crypto.privateEncrypt(privatekey, buf);
  return encrypted.toString("hex");
};
// console.log(encryptoPublicRSA("입력해봅시다."));

const decryptPublicRSA = (crypted) => {
  const buf = Buffer.from(crypted, "hex");
  const decrypted = crypto.publicDecrypt(publickey, buf);
  return decrypted.toString("utf-8");
};
// console.log(decryptPublicRSA(encryptPrivateRSA("입력해봅시다.")));

const decryptPrivateRSA = (crypted) => {
  const buf = Buffer.from(crypted, "hex");
  const decrypted = crypto.privateDecrypt(privatekey, buf);
  return decrypted.toString("utf-8");
};
// console.log(decryptPublicRSA(encryptPrivateRSA("입력해봅시다1.")));

// publickey로 암호화 => privatekey로 복호화
const encryptedPublic = encryptPublicRSA("안녕하세요");
console.log("encryptedPublic : ", encryptedPublic);
let decryptedPrivate = decryptPrivateRSA(encryptedPublic);
console.log("decryptedPrivate : ", decryptedPrivate);

// privatekey로 암호화 => publickey로 복호화
let encryptedPrivate = encryptPrivateRSA("안녕하세요2");
console.log("encryptedPrivate : ", encryptedPrivate);
let decryptedPublic = decryptPublicRSA(encryptedPrivate);
console.log("encryptedPublic : ", decryptedPublic);

// privatekey로 암호화 => privatekey로 복호화
// publickey로 암호화 => publickey로 복호화
// 불가능/ 서로끼리만 가능
