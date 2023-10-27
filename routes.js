const clients = require('./api/clients');
const orders = require('./api/orders');
const items = require('./api/items');
const suppliers = require('./api/suppliers');
const supplies = require('./api/supplies');

function routes(app) {
  app.use('/api/clients', clients);
  app.use('/api/orders', orders);
  app.use('/api/items', items);
  app.use('/api/suppliers', suppliers);
  app.use('/api/supplies', supplies);
}

module.exports = routes;
