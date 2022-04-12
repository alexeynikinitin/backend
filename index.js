const cors = require('cors')
const express = require('express')
const bodyParser = require('body-parser')
const users = require('./routers/users-router')

const app = express()
const port = 7542

app.use(cors())

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/users', users)

app.get('/lessons', async (req, res) => {
  res.send('TASKS')
})

app.use((req, res) => {
  res.send('NOT FOUND')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

process.on('unhandledRejection', function (reason, p) {
  console.log(reason, p)
})
