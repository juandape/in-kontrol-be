const {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('./orders.service');

function HandlerAllOrders(req, res) {
  const orders = getAllOrders();
  res.json(orders);
}

function HandlerOrderById(req, res) {
  const { id } = req.params;
  const order = getOrderById(id);

  if (!order) {
    res.status(404).json({ message: 'Order not found' });
  } else {
    res.json(order);
  }
}

function HandlerCreateOrder(req, res) {
  const order = createOrder(req.body);
  res.status(201).json(order);
}

function HandlerUpdateOrder(req, res) {
  const { id } = req.params;
  const order = updateOrder(id, req.body);

  if (!order) {
    res.status(404).json({ message: 'Order not found' });
  } else {
    res.json(order);
  }
}

function HandlerDeleteOrder(req, res) {
  const { id } = req.params;
  const order = deleteOrder(id);

  if (!order) {
    res.status(404).json({ message: 'Order not found' });
  } else {
    res.json(order);
  }
}

module.exports = {
  HandlerAllOrders,
  HandlerOrderById,
  HandlerCreateOrder,
  HandlerUpdateOrder,
  HandlerDeleteOrder,
};
