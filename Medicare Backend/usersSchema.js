const mongoose = require("mongoose");
const { type } = require("os");

const usersSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  message: { type: String },
  password: { type: String },
  LastName: { type: String },
});

const UserModel = mongoose.model("User", usersSchema);

module.exports = UserModel;
