const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require('./items.service');

async function getAllHandler(req, res, next) {
  try {
    const items = await getAllItems();
    res.json(items);
  } catch (error) {
    next(error);
  }
}

async function getByIdHandler(req, res, next) {
  try {
    const { id } = req.params;
    const item = await getItemById(id);

    if (!item) {
      return res.status(404).json({message: 'Item not found'});
    }
    res.json(item);
  }
  catch (error) {
    next(error);
  }
}

async function createHandler(req, res, next) {
  try {
    const item = await createItem(req.body);
    res.status(201).json({item, message: 'Item created'});
  } catch (error) {
    next(error);
  }
}

async function updateHandler(req, res, next) {
  try{
  const { id } = req.params;
  const item = updateItem(id, req.body);

    if (!item) {
      return res.status(404).json({message: 'Item not found'});
    }
    return res.json({item, message: 'Item updated'});
  } catch (error) {
    next(error);
  }
}

async function deleteHandler(req, res, next) {
  try{
  const { id } = req.params;
  const item = deleteItem(id);

  if (!item) {
    return res.status(404).json({message: 'Item not found'});
  }
    res.json(item, {message: 'Item deleted'});
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
