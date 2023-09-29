const mongoose = require('mongoose');

const ItemsSchema = new mongoose.Schema(
  {
    itemCode: {
      type: String,
      required: true,
      unique: true,
    },
    itemDescription: {
      type: String,
      required: true,
    },
    itemFamily: {
      type: String,
      required: true,
    },
    unitCost: {
      type: Number,
      required: true,
    },
    unitPrice: {
      type: Number,
      required: true,
    },
    marginPerHour: {
      type: Number,
      required: true,
    },
    weight: {
      type: Number,
      required: false,
    },
    realMinUn: {
      type: Number,
      required: false,
    },
    estimatedMinUn: {
      type: Number,
      required: false,
    },
  },
  { timestamps: true }
);

const Items = mongoose.model('Items', ItemsSchema);
module.exports = Items;
