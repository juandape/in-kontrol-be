const mongoose = require('mongoose');
const emailRegex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');

const ClientsSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
      trim: true,
    },
    address: {
      type: String,
      required: [true, 'Address is required'],
      trim: true,
    },
    city: {
      type: String,
      required: [true, 'City is required'],
      trim: true,
    },
    email: {
      type: String,
      lowercase: true,
      required: [true, 'Email is required'],
      match: [emailRegex, 'Please enter a valid email'],
      trim: true,
    },
    instagram: {
      type: String,
      required: false,
      trim: true,
    },
    neighborhood: {
      type: String,
      required: false,
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

const Clients = mongoose.model('Client', ClientsSchema);
module.exports = Clients;
