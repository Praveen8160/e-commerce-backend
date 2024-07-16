require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const cookieParser = require("cookie-parser");
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // If you are sending cookies or authorization headers
  })
);
app.use(cookieParser());
app.use(express.json()); //for accept json data
app.use(express.urlencoded({ extended: false }));

//connection
const DatabaseConnection = require("./Connection.js");
DatabaseConnection(process.env.mongo);

//Routers
const userRouter = require("./Router/User.router.js");
const productRouter = require("./Router/Product.router.js");
const authRouter = require("./Router/Authentication.router.js");
const paymentRouter = require("./Router/Razorpay.router.js");
const orderRouter = require("./Router/Order.router.js");
app.use("/user", userRouter);
app.use("/product", productRouter);
app.use("/Authentication", authRouter);
app.use("/payment", paymentRouter);
app.use("/order", orderRouter);

app.listen(process.env.PORT || 8000, () =>
  console.log(`server running in http://localhost:${process.env.PORT}`)
);
