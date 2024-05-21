// Sequelize : DB를 연결할 떄 유용하게 사용할 수 있는 라이브러리
//  -sequelize: 와 할께 쓰는 mysql 라이브러리는 "mysql2"이다,.
require("dotenv").config();

const { sequelize, User, Sequelize } = require("./models");

// sequelize.sync().then(() => {
//   console.log("access db");
// });

(async () => {
  await sequelize.sync({ force: true }); // force는 강제 리셋
  console.log("access db");
  await User.create({
    userId: "test",
    name: "test",
    password: "test",
  });

  for (let i = 0; i < 100; i++) {
    await User.create({
      userId: "test" + i,
      name: "test" + i,
      password: "test",
    });
  }

  // const list = await User.findAll();
  const list = await User.findOne({ where: { name: "test1" } });
  // const list = await User.findAll({
  //   where: { [Sequelize.Op.like]: "%test1%" },
  // });
  // const list = await User.findAndCountAll({
  //   where: { [Sequelize.Op.like]: "%test1%" },
  //   limit: 3,
  //   offset: 3,
  // });
  console.log(list);
  // console.log(list[0].name);
  // console.log(list.rows[0].name);
  // console.log(list.rows[2].name);
  // console.log(list.rows[3]);
})();
