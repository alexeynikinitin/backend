const fs = require("fs");

exports.readFile = (filePath) => {
  return  new Promise((res, rej) => {
    fs.readFile(filePath, (err, buff) => {
      if (err)
        rej()
      else
        res(JSON.parse(buff))
    })
  })
}

exports.writeFile = (filePath, users) => {
  return new Promise((res, rej) => {
    fs.writeFile(filePath, JSON.stringify(users), (err) => {
      if (err)
        rej(err);
      else
        res();
    })
  })
}