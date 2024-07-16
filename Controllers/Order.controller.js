const order = require("../models/Order.model.js");
const placeOrderhandler = async (req, res) => {
  const orderData = req.body.orderData;
  const orderDate = req.body.orderDate;
  const customerId = req.users.id;
  const customerAddress = req.users.address;
  // console.log(orderDate);
  // console.log(orderData);
  try {
    const orders = orderData.map((order) => ({
      productName: order.pname,
      productId: order.id,
      image: order.img,
      CustomerId: customerId,
      price: parseFloat(order.price),
      description: order.description,
      address: customerAddress,
      orderDate
    }));
    await order.insertMany(orders);
    return res.status(201).json({ success: true });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};

const handleMyOrder = async (req, res) => {
  try {
    const allOrders = await order.find({ CustomerId: req.users.id });
    return res.status(201).json({ success: true, allOrders });
  } catch (error) {
    res.status(500).json({ success: false });
  }
};
module.exports = { placeOrderhandler, handleMyOrder };
