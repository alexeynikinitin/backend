const {readFile, writeFile} = require("./utils");

const getUsers = () => readFile("users.json")

const addUser = async (id, name) => {
  let users = await getUsers()
  users.push({id: id, name: name})
  return writeFile("users.json", users)
};

exports.getUsers = getUsers;
exports.addUser = addUser;