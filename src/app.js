const express = require("express");
const morgan = require("morgan"); // dùng để in log
const helmet = require("helmet"); // dùng để bảo vệ header
const compression = require("compression"); //tối ưu size
const { checkOverload } = require("./helpers/check.connect");

const app = express();

app.use(morgan("dev"));
// morgan("combined"); kiểu log
// morgan("common"); kiểu log
// morgan("short"); kiểu log
// morgan("tiny"); kiểu log
app.use(helmet());
app.use(compression());
//init middlewares

//init db
require('./dbs/init.mongodb')
checkOverload()
//init routes
app.get("/", (req, res, next) => {
  const strCompress = " Hello Factipjs";
  return res.status(200).json({
    message: "Welcome Fantipjs",
    metadata: strCompress.repeat(10000),
  });
});

//handling error
module.exports = app;
