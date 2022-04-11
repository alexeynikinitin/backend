let fs = require("fs");

const getUsers = (callback) => {
  return new Promise((res, rej) => {
    fs.readFile("users.json", (err, buff) => {
      res(JSON.parse(buff))
    })
  })
};

const addUser = (id, name) => {
  users.push({id: id, name: name})
};

exports.getUsers = getUsers;
exports.addUser = addUser;