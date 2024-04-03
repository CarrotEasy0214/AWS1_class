const express = require("express");
const morgan = require("morgan");
const path = require("path");

const app = express();

app.set("port", process.env.PORT || 8080);
app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static("views"));

app.get("/", (req, res) => {
  // res.end()
  // res.send()
  // res.sendFile()
  // res.json()
  res.render("index", {
    title: "오늘의 점심",
    name: "박성민",
    elem: "<div style='color: red'>제육볶음</div>",
  });
});

app.listen(app.get("port"), () => {
  console.log("open server", app.get("port"));
});
