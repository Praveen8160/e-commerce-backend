const express = require("express");
const Router = express.Router();
const {
  paymenthandler,
  paymentverifyhandler,
  rozarpayKeyhandler,
} = require("../Controllers/Razorpay.controller.js");
Router.post("/razorpayPayment", paymenthandler);
Router.post("/paymentverify", paymentverifyhandler);
Router.get("/rozarpayKey", rozarpayKeyhandler);
module.exports = Router;
