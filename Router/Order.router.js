const express = require("express");
const {
  placeOrderhandler,
  handleMyOrder,
} = require("../Controllers/Order.controller");
const checkAUthenticationCookie = require("../Middleware/Authentication.middleware");
const Router = express.Router();

Router.post(
  "/placeOrder",
  checkAUthenticationCookie("token"),
  placeOrderhandler
);
Router.get("/myOrder",checkAUthenticationCookie("token"), handleMyOrder);
module.exports = Router;
