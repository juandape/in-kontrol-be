const mongoose = require('mongoose');
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

const SuppliersSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    nit: {
      type: String,
      required: [true, 'Nit is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: false,
      match: [emailRegex, 'Please enter a valid email'],
      trim: true,
    },
    phone: {
      type: String,
      required: [true, 'Phone is required'],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Suppliers = mongoose.model('Supplier', SuppliersSchema);
module.exports = Suppliers;
