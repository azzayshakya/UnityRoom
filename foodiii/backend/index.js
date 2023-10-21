const express = require('express')
const mongoose=require('mongoose')
const User=require('./User')
// const connectDB=require('./db').ConnectDb
const app = express()
const port = 3000
const mongoDB =require("./db")
mongoDB();

app.get('/', (req, res) => {
  const newUser=new User({
    user:"azay"
  })
  newUser.save()
  res.send('bhadwa diwaaj')

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

