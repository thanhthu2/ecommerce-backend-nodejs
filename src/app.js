require("dotenv").config();
const express = require("express");
const morgan = require("morgan"); // dùng để in log
const helmet = require("helmet"); // dùng để bảo vệ header
const compression = require("compression"); //tối ưu size
const { checkOverload } = require("./helpers/check.connect");

const app = express();
console.log(`Process::`, process.env);
//init middlewares
app.use(morgan("dev"));
// morgan("combined"); kiểu log
// morgan("common"); kiểu log
// morgan("short"); kiểu log
// morgan("tiny"); kiểu log
app.use(helmet());
app.use(compression());

//init db
require("./dbs/init.mongodb");
// checkOverload()
//init routes
app.use("/", require("./routes"));
//handling error
module.exports = app;
