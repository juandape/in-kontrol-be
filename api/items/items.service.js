const Item = require('./items.model');

function getAllItems() {
  return Item.find();
}

async function getItemById(id) {
  const item = await Item.findById(id);

  if (!item) {
    throw new Error(`Item not found with id ${id}`);
  }
  return item;
}

function createItem(data) {
  return Item.create(data);
}

async function updateItem(id, data) {
  const foundItem = await Item.findById(id);

  if (!foundItem) {
    throw new Error(`Item not found with id ${id}`);
  }

  return Item.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

async function deleteItem(id) {
  const item = await Item.findById(id);

  if (!item) {
    throw new Error(`Item not found with id ${id}`);
  }

  return Item.findByIdAndDelete(id);
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
