const {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
} = require('./clients.service');

async function getAllHandler(req, res, next) {
  try {
    const clients = await getAllClients();
    res.json(clients);
  } catch (error) {
    next(error);
  }
}

async function getByIdHandler(req, res, next) {
  try {
    const { id } = req.params;
    const client = await getClientById(id);

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    return res.json(client);
  } catch (error) {
    next(error);
  }
}

async function createHandler(req, res, next) {
  try {
    const client = await createClient(req.body);
    res.status(201).json(client);
  } catch (error) {
    next(error);
  }
}

async function updateHandler(req, res, next) {
  try {
    const { id } = req.params;
    const client = await updateClient(id, req.body);

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    return res.json(client);
  } catch (error) {
    next(error);
  }
}

async function deleteHandler(req, res, next) {
  try {
    const { id } = req.params;
    const client = await deleteClient(id);

    if (!client) {
      return res.status(404).json({ message: 'Client not found' });
    }

    return res.status(204).json();
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
