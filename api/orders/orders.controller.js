const {
  getAllOrders,
  getOrderById,
  createOrder,
  updateOrder,
  deleteOrder,
} = require('./orders.service');

async function getAllHandler(req, res, next) {
  try {
    const orders = await getAllOrders();
    res.json(orders);
  } catch (error) {
    next(error);
  }
}

async function getByIdHandler(req, res, next) {
  try {
    const { id } = req.params;
    const order = await getOrderById(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (error) {
    next(error);
  }
}

async function createHandler(req, res, next) {
  try {
    const order = await createOrder(req.body);
    res.status(201).json({order, message: 'Order created' });
  } catch (error) {
    next(error);
  }
}

async function updateHandler(req, res, next) {
  try {
    const { id } = req.params;
    const order = updateOrder(id, req.body);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    return res.json({order, message: 'Order updated' });
  } catch (error) {
    next(error);
  }
}

async function deleteHandler(req, res) {
  try {
    const { id } = req.params;
    const order = deleteOrder(id);

    if (!order) {
      return res.status(404).json({ message: 'Order not found' });
    }
    return res.json(order, { message: 'Order deleted' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllHandler,
  getByIdHandler,
  createHandler,
  updateHandler,
  deleteHandler,
};
