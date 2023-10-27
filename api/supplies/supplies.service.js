const Supplie = require('./supplies.model');

function getAllSupplies() {
  return Supplie.find();
}

async function getSupplieById(id) {
  const supplie = await Supplie.findById(id);

  if (!supplie) {
    throw new Error('Supplie not found');
  }
  return supplie;
}

function createSupplie(data) {
  return Supplie.create(data);
}

async function updateSupplie(id, data) {
  const foundSupplie = await Supplie.findById(id);

  if (!foundSupplie) {
    throw new Error('Supplie not found');
  }
  return Supplie.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

async function deleteSupplie(id) {
  const supplie = await Supplie.findById(id);

  if (!supplie) {
    throw new Error('Supplie not found');
  }
  return Supplie.findByIdAndDelete(id);
}

module.exports = {
  getAllSupplies,
  getSupplieById,
  createSupplie,
  updateSupplie,
  deleteSupplie,
};
