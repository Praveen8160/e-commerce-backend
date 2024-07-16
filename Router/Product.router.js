const express = require("express");
const {
  getAllProductCategory,
  getAllProduct,
  getSingleCategoryProduct,
  getSingleProduct
} = require("../Controllers/Product.controller");
const Router = express.Router();

Router.get("/getAllProductCategories", getAllProductCategory);
Router.get("/getAllProduct", getAllProduct);
Router.get("/getSingleCategoryProduct/:id",getSingleCategoryProduct)
Router.get("/getSIngleProduct/:id",getSingleProduct)
module.exports = Router;
