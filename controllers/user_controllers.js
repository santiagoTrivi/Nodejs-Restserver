const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const {User, Rol} = require('../models/userData');
//const bodyparser = require('body-parser');


const userGet = async (req = request, res = response)=>{
    const {limit = 5} = req.query;
    const users = await User.findAll();
    const total = await User.count();
    res.json( {total, users});
    //res.render('index');
}

const userGetBYId = async (req = request, res = response)=>{
    const id = req.params.id;
    const user = await User.findByPk( id );
    res.json({ user });
    //res.render('index');
}

const userPost = async (req = request, res = response)=>{
    let {name, email, password, rol} = req.body;
    const rl = await Rol.findOne({ where: { rol} });
    const rol_id = rl.id;
    
    const salt = bcryptjs.genSaltSync(10);
    password = bcryptjs.hashSync(password, salt);
  
    try {
        const user = new User({name, email, password, rol_id});
        await user.save();
        res.json({user});
    } catch (error) {
        res.status(500).json({error});
    }

     
}

const userPut = async (req = request, res = response)=>{
    const id = req.params.id;

    res.json({
        msj: "put api - controller",
        id
    });
}

const userPatch = (req = request, res = response)=>{
    res.json({
        msj: "patch api - controller"
    });
}


const userDelete = (req = request, res = response)=>{
    res.json({
        msj: "delete api - controller"
    });
}

module.exports = {
    userGet,
    userGetBYId,
    userPost,
    userPut,
    userPatch,
    userDelete
}