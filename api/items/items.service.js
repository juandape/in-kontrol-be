const Items = require('./items.model');

function getAllItems() {
  return Items.find();
}

async function getItemById(id) {
  const item = await Items.findById(id);

  if (!item) {
    throw new Error(`Item not found with id ${id}`);
  }
  return item;
}

function createItem(item) {
  return Items.create(item);
}

async function updateItem(id, item) {
  const foundItem = await Items.findById(id);

  if (!foundItem) {
    throw new Error(`Item not found with id ${id}`);
  }

  return Items.findByIdAndUpdate(id, item, { new: true, upsert: true });
}

async function deleteItem(id) {
  const item = await Items.findById(id);

  if (!item) {
    throw new Error(`Item not found with id ${id}`);
  }

  return Items.findByIdAndDelete(id);
}

module.exports = {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
};
