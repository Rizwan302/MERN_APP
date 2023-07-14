const express = require('express')
require("./db/db")
const User = require("./models/User")
const userroute = require("./Routres/createUser")

const app = express()
const port = 5000

app.use(userroute)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})