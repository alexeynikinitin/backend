const {readFile} = require("./utils");
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String
});
const User = mongoose.model('User', userSchema);

const getUsers = (name) => {
  if (!name) {
    return User.find()
  } else {
    return User.find({ name: new RegExp(name)})
  }
}

const getUser = (id) => {
  return User.find({ _id: id})
}

const addUser = async (name) => {
  const user = new User({name: name})
  return await user.save();
};

const deleteUser = async (_id) => {
  const res = await User.remove({ _id: _id });
  res.deletedCount;
}

const updateUser = (_id, name) => {
  return User.updateOne({_id: _id, name: name})
}

exports.addUser = addUser;
exports.getUser = getUser;
exports.getUsers = getUsers;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;