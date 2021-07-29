const express = require("express");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const errorMiddleware = require("./middlewares/errors");

const app = express();
app.use(cookieParser());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cors());

const products = require("./routes/product");
const users = require("./routes/user");
const orders = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", users);
app.use("/api/v1", orders);

//Handle error middlewares
app.use(errorMiddleware);

module.exports = app;
