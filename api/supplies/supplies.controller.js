const {
  getAllSupplies,
  getSupplieById,
  createSupplie,
  updateSupplie,
  deleteSupplie,
} = require('./supplies.service');

async function getAllHandler(req, res, next) {
  try {
    const supplies = await getAllSupplies();
    res.json(supplies);
  } catch (error) {
    next(error);
  }
}

async function getByIdHandler(req, res, next) {
  try {
    const { id } = req.params;
    const supplie = await getSupplieById(id);

    if (!supplie) {
      return res.status(404).json({ message: 'Supplie not found' });
    }
    res.json(supplie);
  } catch (error) {
    next(error);
  }
}

async function createHandler(req, res, next) {
  try {
    const supplie = await createSupplie(req.body);
    res.status(201).json({ supplie, message: 'Supplie created' });
  } catch (error) {
    next(error);
  }
}

async function updateHandler(req, res, next) {
  try {
    const { id } = req.params;
    const supplie = updateSupplie(id, req.body);

    if (!supplie) {
      return res.status(404).json({ message: 'Supplie not found' });
    }
    return res.json({ supplie, message: 'Supplie updated' });
  } catch (error) {
    next(error);
  }
}

async function deleteHandler(req, res) {
  try {
    const { id } = req.params;
    const supplie = deleteSupplie(id);

    if (!supplie) {
      return res.status(404).json({ message: 'Supplie not found' });
    }
    return res.json({ message: 'Supplie deleted' });
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
