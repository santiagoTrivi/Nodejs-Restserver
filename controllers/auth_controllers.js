const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const { User } = require('../models/userData');
const {generatorjwt} = require('../helpers/generator-jwt');



const Userlogin = async (req = request, res = response) =>{
    const {password, email} = req.body;

    
    try {
        // checking fi the email is the database
        const user = await User.findOne({where: {email}});
        if(!user){
            return res.json({error: "user not registered"});
        }

        //checking if the status is false
        if(user.status == 0){
            return res.json({error: "error - user not registered"});
        }

        //validate the password
        const passwordcheck = await bcryptjs.compare(password, user.password);
        if(!passwordcheck){
            return res.json({error: "user / password incorrect. try again"});
        }

        //creating the token
        const token = await generatorjwt(user.id);    

        res.json({
            message: "welcome to login",
            user,
            token});

    } catch (error) {
        res.status(400).json({error: "invalid"});
    }




};



module.exports = {
    Userlogin
};