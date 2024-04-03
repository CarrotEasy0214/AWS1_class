let page = 1;
let count = 4;

const getUsers = async () => {
  try {
    const usersRes = await fetch("http://localhost:3000", {
      method: "post",
      mode: "no-cors",
      body: `page=${page}&count=${count}`,
    });
    console.log(usersRes);
    const usersData = await usersRes.text();
    console.log(usersData);
    const userArr = JSON.parse(usersData);
    console.log(userArr);

    //usersElem = tbody를 담은 상자가 되야한다.
    const usersElem = document.getElementById("users");
    console.log(usersElem);
    usersElem.innerHTML = "";
    userArr.forEach((item) => {
      //상자 << tbody
      // usersElem.append(tbody);
      usersElem.innerHTML += `<tr>
    <td class="num">${1}</td>
    <td class="title">
      <a href="index1.html">${item.title}</a>
    </td>
    <td>${"관리자"}</td>
    <td>${new Date()}</td>
    <td>${1}</td>
  </tr>`;
    });
    //   const userArr = JSON.parse(
    //     await (await fetch("http://localhost:3000/list")).text()
    //   );
  } catch (err) {
    console.error(err);
  }
};
getUsers();

const getPage = async () => {
  try {
    // const pageCount = await fetch("http://localhost:3000", {
    //   method: "post",
    //   body: `count=${count}`,
    // });
    const pageCount = 3;

    const pagingElem = document.getElementById("paging");

    for (let i = 0; i < pageCount; ++i) {
      const tempLi = document.createElement("li");
      tempLi.innerHTML = i + 1;
      tempLi.onclick = () => {
        page = i + 1;
        getUsers();
      };
      pagingElem.append(tempLi);
    }
  } catch (err) {
    console.error(err);
  }
};

getPage();
