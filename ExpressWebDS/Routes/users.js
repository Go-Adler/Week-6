const express = require('express')
const router = express.Router()


router.get('/', (req, res) => {
    res.send('user-list')
})

router.get('/new', (req, res) => {
    res.send('new-user')

})

router.route('/:id')
.get((req, res) => {
    res.send(`Users dynamically displayed and the id is: ${req.params.id}`)
})
.put((req, res) => {
    res.send(`Users dynamically displayed and the id is: ${req.params.id}`)
})
.delete((req, res) => {
    res.send(`Users dynamically displayed and the id is: ${req.params.id}`)
})

module.exports = router