const Client = require('./clients.model');

function getAllClients() {
  return Client.find();
}

function getClientById(id) {
  return Client.findById(id);
}

function createClient(data) {
  return Client.create(data);
}

function updateClient(id, data) {
  return Client.findByIdAndUpdate(id, data, { new: true, upsert: true });
}

function deleteClient(id) {
  return Client.findByIdAndDelete(id);
}

module.exports = {
  getAllClients,
  getClientById,
  createClient,
  updateClient,
  deleteClient,
};
