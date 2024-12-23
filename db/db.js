const mongoose = require('mongoose');
require('dotenv').config();
const { User } = require('./create.js');


let isConnected = false;

const connect = async () => {
  if (isConnected) {
    console.log("Using existing MongoDB connection");
    return;
  }

  try {
    await mongoose.connect(process.env.db);
    isConnected = true;
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
};

const users = async () => {
  try {
    const allUsers = await User.find();
    return allUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
  }
};

module.exports = { users, connect };