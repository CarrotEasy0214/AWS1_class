// parseHeader 식별자를 가진 함수를 선언 및 할당했다. (1)
// 상수인 변수를 선언하여 식별자를 parseHeader로 만들고 함수를 할당했다. (상수는 항상 같은 수 ) (1)
const parseHeader = (str) => {
  // parseHeader 식별자를 가진 함수를 선언 및 할당했다. (1)
  // 상수인 변수를 선언하여 식별자를 parseHeader로 만들고 함수를 할당했다. (상수는 항상 같은 수 ) (1)
  const arr = str.split("\r\n");
  const [method, path, protocol] = arr[0].split(" ");
  let tempIdx = path.indexOf("?");
  if (tempIdx == -1) tempIdx = path.length;
  const temp = { method, path: path.slice(0, tempIdx), protocol };
  // console.log(temp.path);

  if (path.indexOf(".jpg") > -1) {
    temp.ext = "jpg";
  }

  if (path.indexOf(".png") > -1) {
    temp.ext = "png";
  }

  for (let i = 1; i < arr.length; ++i) {
    const tempIdx = arr[i].indexOf(": ");
    temp[arr[i].slice(0, tempIdx)] = arr[i].slice(tempIdx + 2);
  }

  return temp;
};

// parsebody 식별자를 가진 함수를 선언 및 할당했다. (1)
// 상수인 변수를 선언하여 식별자를 parsebody로 만들고 함수를 할당했다. (상수는 항상 같은 수 ) (1)
const parseBody = (str) => {
  if (str.length == 0) return {};

  const body = {};
  const bodyArr = str.split("&");

  bodyArr.forEach((item) => {
    const [name, value] = item.split("=");
    body[name] = decodeURI(value);
  });

  return body;
};

// mekeReq 식별자를 가진 함수를 선언 및 할당했다. (1)
// 상수인 변수를 선언하여 식별자를 mekeReq로 만들고 함수를 할당했다. (상수는 항상 같은 수 ) (1)
const makeReq = (data) => {
  const tempStr = data.toString();
  console.log(tempStr);
  const [headerStr, bodyStr] = tempStr.split("\r\n\r\n");

  return { header: parseHeader(headerStr), body: parseBody(bodyStr) };
};

// makeReq() <=호출

module.exports = { makeReq };
// 객체를 만들고 그 매서드 (함수인 프로퍼티)로 makeRq를 넣어주고 반환한다.
// require 함수로 호출됐을 때
