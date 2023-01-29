const express = require('express')
const app = express()


app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    console.log('Request came in slash');
    res.render('index', {text: 'world' })
})

const userRouter = require('./routes/users')
app.use('/user', userRouter)
app.listen(3000)