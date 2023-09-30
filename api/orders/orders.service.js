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

function createOrder(order) {
  return Order.create(order);
}

function updateOrder(id, order) {
  return Order.findByIdAndUpdate(id, order, { new: true, upsert: true });
}

function deleteOrder(id) {
  const order = Order.findByIdAndDelete(id);
  if (!order) {
    throw new Error('Order not found');
  }
  return order;
}

module.exports = {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
};
