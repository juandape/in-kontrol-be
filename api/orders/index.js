const { Router } = require('express');

const {
  handlerAllOrders,
  handlerOrderById,
  handlerCreateOrder,
  handlerUpdateOrder,
  handlerDeleteOrder,
} = require('./orders.controller');

const router = Router();

router.get('/', handlerAllOrders);
router.get('/:id', handlerOrderById);
router.post('/', handlerCreateOrder);
router.patch('/:id', handlerUpdateOrder);
router.delete('/:id', handlerDeleteOrder);

module.exports = router;