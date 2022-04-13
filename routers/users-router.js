const {addUser, getUsers, deleteUser, getUser, updateUser} = require("../repository");

const express = require('express')
const router = express.Router()

router.get('/', async (req, res) => {
  let users = await getUsers(req.query.name);
  res.send(users)
})

router.get('/:id', async (req, res) => {
  const userId = req.params.id
  if (!userId) {
    res.send(404)
  } else {
    let user = await getUser(userId);
    res.send(user)
  }
})

router.delete('/:id', async (req, res) => {
  let userId = req.params.id
  await deleteUser(userId)
  let users = await getUsers();
  res.send(users)
})

router.post('/', async (req, res) => {
  await addUser(req.body.name)
  res.send({success: true})
})

router.put('/', async (req, res) => {
  const users = await updateUser(req.body.id, req.body.name)
  res.send(users)
})

module.exports = router