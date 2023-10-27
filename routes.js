const clients = require('./api/clients');
const orders = require('./api/orders');
const items = require('./api/items');
const suppliers = require('./api/suppliers');

function routes(app) {
  app.use('/api/clients', clients);
  app.use('/api/orders', orders);
  app.use('/api/items', items);
  app.use('/api/suppliers', suppliers);
}

module.exports = routes;
