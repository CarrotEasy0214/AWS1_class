let cnt = 1;
function a() {
  let writer = f.writer.value;
  let pwd = f.pwd.value;
  let content = f.content.value;
  let el = mkDiv(writer, pwd, content);
  let list = document.getElementById("list");
  list.appendChild(el);
}

function mkDiv(writer, pwd, content) {
  let newDiv = document.createElement("div");
  newDiv.id = "d_" + cnt++;
  let html = "";
  html += "writer:" + writer + "<br/>";
  html += "content:" + content + "<br/>";
  html += "<input type = 'button' value = '수정'>";
  html += "<input type = 'button' value = '삭제'>";
  newDiv.innerHTML = html;
  return newDiv;
}
