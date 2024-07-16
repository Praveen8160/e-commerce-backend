const mongoose = require("mongoose");
const orderschema = mongoose.Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
    },
    CustomerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    orderDate: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
const ordermodel = mongoose.model("Order", orderschema);

module.exports = ordermodel;
