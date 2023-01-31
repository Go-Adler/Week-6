const express = require('express')
const bodyParser = require('body-parser')


const userRoute = express()
userRoute.use(bodyParser.json())
userRoute.use(bodyParser.urlencoded({extended:true}))

userRoute.set('view engine', 'ejs')
userRoute.set('views', './views/users')

const userController = require('../controllers/userController.js')

userRoute.get('/register', userController.loadRegister)
userRoute.post('/register', userController.insertUser)
module.exports = userRoute