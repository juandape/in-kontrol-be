const clients = require('./api/clients');
const orders = require('./api/orders');
const items = require('./api/items');

function routes(app) {
  app.use('/api/clients', clients);
  app.use('/api/orders', orders);
  app.use('/api/items', items);
}

module.exports = routes;