const {response, request} = require('express');


const login = (req = request, res = response) =>{
    res.json({message: "welcome to loging"});
};



module.exports = {
    login
};