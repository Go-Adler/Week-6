const mongoose = require('mongoose')
const express = require('express')


const app = express()
mongoose.set('strictQuery', true)
mongoose.connect('mongodb://127.0.0.1:27017/UserManagementSystem')

const userRoute = require('./routes/userRoute')
app.use('/',userRoute)

app.listen(3000, function(){
    console.log('Server is running');
})