// const tempArr = [
//   {
//     id: 1,
//     title: "토요일 보충수업",
//     createdAt: "2024-03-30",
//   },
//   {
//     id: 2,
//     title: "토요일 보충수업2",
//     createdAt: "2024-03-30",
//   },
// ];

let body = location.search;
if (body == "") {
  body = "page=1&count=4";
} else {
  body = body.slice(1);
}
console.log(body);

const listElem = document.getElementById("list");
const setList = async () => {
  const res = await fetch("/", {
    method: "post",
    body,
  });

  const text = await res.text();

  const arr = JSON.parse(text);
  console.log(arr);

  listElem.innerHTML = "";
  for (let i = 0; i < arr.length; ++i) {
    document.getElementById("list").innerHTML += `<tr>
      <td class="num">${arr[i].id}</td>
      <td class="title">${arr[i].title}</td>
      <td class="user"></td>
      <td class="date">${arr[i].createdAt}</td>
      <td class="view"></td>
    </tr>`;
  }
};
setList();
// const board = `<tr>
// <td class="num">1</td>
// <td class="title">2</td>
// <td class="user">3</td>
// <td class="date">4</td>
// <td class="view">5</td>
// </tr>`;

// document.getElementById("list").innerHTML = board;

// for (let i = 0; i < tempArr.length; ++i) {
//   document.getElementById("list").innerHTML += `<tr>
//     <td class="num">${tempArr[i].id}</td>
//     <td class="title">${tempArr[i].title}</td>
//     <td class="user"></td>
//     <td class="date">${tempArr[i].createdAt}</td>
//     <td class="view"></td>
//   </tr>`;
// }
