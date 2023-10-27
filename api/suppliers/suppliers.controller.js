const {
  getAllSuppliers,
  getSupplierById,
  createSupplier,
  updateSupplier,
  deleteSupplier,
} = require('./suppliers.service');

async function getAllHandler(req, res, next) {
  try {
    const suppliers = await getAllSuppliers();
    res.json(suppliers);
  } catch (error) {
    next(error);
  }
}

async function getByIdHandler(req, res, next) {
  try {
    const { id } = req.params;
    const supplier = await getSupplierById(id);

    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    return res.json(supplier);
  } catch (error) {
    next(error);
  }
}

async function createHandler(req, res, next) {
  try {
    const supplier = await createSupplier(req.body);
    res.status(201).json({ supplier, message: 'Supplier created' });
  } catch (error) {
    next(error);
  }
}

async function updateHandler(req, res, next) {
  try {
    const { id } = req.params;
    const supplier = await updateSupplier(id, req.body);

    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    return res.json({ supplier, message: 'Supplier updated' });
  } catch (error) {
    next(error);
  }
}

async function deleteHandler(req, res, next) {
  try {
    const { id } = req.params;
    const supplier = await deleteSupplier(id);

    if (!supplier) {
      return res.status(404).json({ message: 'Supplier not found' });
    }

    return res.json({ message: 'Supplier deleted' });
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
