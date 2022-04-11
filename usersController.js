const {addUser, getUsers} = require("./repository");

exports.userController = async (req, res) => {
  if (req.method === "POST") {
    debugger
    await addUser(3, "Lesha")
    res.write(JSON.stringify({success: true}))
    res.end()
  } else {
    let users = await getUsers();
    res.write(JSON.stringify(users))
    res.end()
  }
}