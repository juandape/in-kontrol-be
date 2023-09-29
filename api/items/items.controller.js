const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require('./items.service');

function HandlerAllItems(req, res, next) {
  const items = getAllItems();
  res.json(items);
}

function HandlerItemById(req, res, next) {
  const { id } = req.params;
  const item = getItemById(id);

  if (!item) {
    throw new Error(`Item not found with id ${id}`);
  } else {
    res.json(item);
  }
}

function HandlerCreateItem(req, res, next) {
  const item = createItem(req.body);
  res.json(item);
}

function HandlerUpdateItem(req, res, next) {
  const { id } = req.params;
  const item = updateItem(id, req.body);

  if (!item) {
    throw new Error(`Item not found with id ${id}`);
  } else {
    res.json(item);
  }
}

function HandlerDeleteItem(req, res, next) {
  const { id } = req.params;
  const item = deleteItem(id);

  if (!item) {
    throw new Error(`Item not found with id ${id}`);
  } else {
    res.json(item);
  }
}

module.exports = {
  HandlerAllItems,
  HandlerItemById,
  HandlerCreateItem,
  HandlerUpdateItem,
  HandlerDeleteItem,
};
