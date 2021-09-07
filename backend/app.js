const express = require("express");
const bodyparser = require("body-parser");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const cors = require("cors");

const dotenv = require("dotenv");


const errorMiddleware = require("./middlewares/errors");

dotenv.config({ path: "backend/config/config.env" });


const app = express();
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(fileUpload());
app.use(cors());

const products = require("./routes/product");
const users = require("./routes/user");
const payment = require("./routes/payment");
const orders = require("./routes/order");

app.use("/api/v1", products);
app.use("/api/v1", users);
app.use("/api/v1", orders);
app.use("/api/v1", payment);

//Handle error middlewares
app.use(errorMiddleware);

module.exports = app;
