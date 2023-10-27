const mongoose = require('mongoose');

const SuppliesSchema = new mongoose.Schema(
  {
    supplierName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Supplier',
      required: true,
    },
    supplieCode: {
      type: String,
      required: true,
    },
    supplieDescription: {
      type: String,
      required: true,
    },
    unitCost: {
      type: Number,
      required: true,
    },
    udm: {
      type: String,
      required: true,
    },
    colorGroup: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Supplie = mongoose.model('Supplie', SuppliesSchema);
module.exports = Supplie;
