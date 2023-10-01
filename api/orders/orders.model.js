const mongoose = require('mongoose');

const OrdersSchema = new mongoose.Schema({
  client: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: true,
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
  ],
  orderDate: {
    type: Date,
    required: true,
  },
  deadline: {
    type: Date,
    required: true,
  },
  deliveryDate: {
    type: Date,
    required: true,
  },
  line: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  shipment: {
    type: Number,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
  unitPrice: {
    type: Number,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
},
{ timestamps: true }
);

const Orders = mongoose.model('Order', OrdersSchema);
module.exports = Orders;
