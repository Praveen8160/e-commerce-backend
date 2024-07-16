const Categories = require("../models/Categories.model.js");
const Product = require("../models/Product.model.js");
const getAllProductCategory = async (req, res) => {
  try {
    const allCategories = await Categories.find({});
    return res.json(allCategories);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getAllProduct = async (req, res) => {
  try {
    const allProducts = await Product.find({});
    return res.json(allProducts);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getSingleCategoryProduct = async (req, res) => {
  const id = req.params.id;
  // console.log(id);
  try {
    const cat = await Categories.findOne({ _id: id });
    const product = await Product.find({ category: cat.name });
    res.json({ success: true, product, category: cat.name });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id });
    return res.json({ product });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getAllProductCategory,
  getAllProduct,
  getSingleCategoryProduct,
  getSingleProduct,
};
