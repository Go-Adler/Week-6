const User = require('../models/userModel')

const loadRegister = async(req, res) => {
    try {
        res.render('registration')
    } catch (error) {
       console.log(error.message); 
    }
}

const insertUser = async(req, res) => {
    try {
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            phoneNumber: req.body.phoneNumber,
            password: req.body.password,
            isAdmin: 0

        })
        const userData = await user.save()
        
        if(userData){
            res.render('registaration', {message: 'Your registration successful'})
        } else {
            res.render('registation', {maessage: 'Registration failed.'})
        }
    } catch (error) {
        console.log(error.message);
    }
}

module.exports = {
    loadRegister,
    insertUser
}