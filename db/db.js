const mongoose = require('mongoose');
require('dotenv').config();
const { User } = require('./create.js');



const connect = async () => {
  try {
    await mongoose.connect(process.env.db);
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