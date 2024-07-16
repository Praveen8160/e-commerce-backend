const mongoose = require("mongoose");
const categoryschema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});
const categorymodel = mongoose.model("categories", categoryschema);

module.exports = categorymodel;
