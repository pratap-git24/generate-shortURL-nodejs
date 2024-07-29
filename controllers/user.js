const USER = require("../models/user");

async function handleUserSignup(req,res){
    const {name,email,password} = req.body;

    await USER.create({
        name,
        email,
        password,
    })
    return res.render("home");
}

async function handleUserLogin(req,res){
    const {email,password} = req.body;
    return res.redirect('login')
}

module.exports = {
    handleUserSignup,
    handleUserLogin,
}