const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
require("dotenv").config();

const router = require("./router");
const { Sequelize, sequelize } = require("./models");

const app = express();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "ejs");
app.set("views", "public");

app.use(morgan("dev"));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static("public"));
app.use(router);

sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(app.get("port"), () =>
      console.log(app.get("port"), "server open")
    );
  })
  .catch((err) => console.error(err));
