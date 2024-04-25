const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const sequelize = new Sequelize(
  // "AWS_TEST", // 사용할 database 명
  // "aws", // username
  // "1234qwER!@", // password
  // {
  //   username: "AWS",
  //   password: "1234qwER!@",
  //   database: "AWS_TEST",
  //   host: "127.0.0.1",
  //   port: 3306,
  //   dialect: "mysql",
  // }
  config.database, // 사용할 database 명
  config.username, // username
  config.password, // password
  config
);

const User = require("./user").init(sequelize);
const Board = require("./board").init(sequelize);

const db = { sequelize, Sequelize, User, Board };

User.associate(db);
Board.associate(db);

// User.associate(db);

module.exports = db;
