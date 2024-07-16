const express = require("express");
const {
  userRegisterhandler,
  userLoginhandler,
} = require("../Controllers/User.controller");
const Router = express.Router();
Router.post("/SignUp", userRegisterhandler);
Router.post("/SignIn", userLoginhandler);
module.exports = Router;
