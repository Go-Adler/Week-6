const User = require('../models/userModel')
const loadRegister = async(req, res) => {
    try {
        res.render('registration')
    } catch (error) {
        
    }
}
const insertUser = async(req, res) => {
    try {
       const user = new User({
            name: req.body.name,
            email: req.body.email,
            mobile: req.body.mno,
            image: req.file.filename,
            password: req.body.password,
            is_admin: 0,
        })
        const userData = await user.save()
        if(userData){
            res.render('registration', {message: 'Registation success'})
        } else {
            res.render('registration', {message: 'Registartion failded'})
        }
    } catch (error) {
        console.log(error.message);
    }
}
module.exports = {
    loadRegister,
    insertUser
}