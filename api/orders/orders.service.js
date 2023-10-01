const Order = require('./orders.model');

function getAllOrders() {
  return Order.find();
}
async function getOrderById(id) {
  const order = await Order.findById(id);

  if (!order) {
    throw new Error('Order not found');
  }
  return order;
}

function createOrder(data) {
  return Order.create(data);
}

async function updateOrder(id, data) {
  const foundOrder = await Order.findById(id);

  if (!foundOrder) {
    throw new Error('Order not found');
  }
  return Order.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

async function deleteOrder(id) {
  const order = await Order.findById(id);

  if (!order) {
    throw new Error('Order not found');
  }
  return Order.findByIdAndDelete(id);
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
