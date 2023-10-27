const Supplier = require('./suppliers.model');

function getAllSuppliers() {
  return Supplier.find();
}

async function getSupplierById(id) {
  return Supplier.findById(id);
}

function createSupplier(data) {
  return Supplier.create(data);
}

function updateSupplier(id, data) {
  return Supplier.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

function deleteSupplier(id) {
  return Supplier.findByIdAndDelete(id);
}

module.exports = {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
};
