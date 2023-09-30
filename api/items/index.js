const { Router } = require('express');

const {
  HandlerAllItems,
  HandlerItemById,
  HandlerCreateItem,
  HandlerUpdateItem,
  HandlerDeleteItem,
} = require('./items.controller');

const router = Router();

router.get('/', HandlerAllItems);
router.get('/:id', HandlerItemById);
router.post('/', HandlerCreateItem);
router.patch('/:id', HandlerUpdateItem);
router.delete('/:id', HandlerDeleteItem);

module.exports = router;
