const {addUser, getUsers} = require("../repository");

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  let users = await getUsers();
  if (!!req.query.name) {
    users = users.filter(u => u.name.indexOf(req.query.name) > -1)
  }
  res.send(users)
})

router.get('/:id', async (req, res) => {
  let userId = req.params.id
  let users = await getUsers();
  let user = users.find(u => u.id == userId)
  if (user)
    res.send(user)
  else
    res.send(404)
})

router.post('/', async (req, res) => {
  await addUser(3, req.body.name)
  res.send({success: true})
})

module.exports = router