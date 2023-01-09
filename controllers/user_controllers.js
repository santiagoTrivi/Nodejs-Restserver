const {response, request} = require('express');
const connected = require('../db/sql_connection');
const bcryptjs = require('bcryptjs');
const {validationResult} = require('express-validator');
//const {dbconnection} = require('../db/config');
//const bodyparser = require('body-parser');


const userGet = (req = request, res = response)=>{
    const {q, nombre, apikey} = req.query;
    res.json({
        msj: "get api - controller",
        q,
        nombre,
        apikey
    });
    //res.render('index');
}

const userPost = (req = request, res = response)=>{
    const obj = req.body;
    const output = validationResult(req);
    if(!output.isEmpty()){
        res.status(400).json(output);
    }
    const salt = bcryptjs.genSaltSync(10);
    const encrypted = bcryptjs.hashSync(obj.password, salt);
    
    connected.query('INSERT INTO users (name, email, password) VALUES (?,?,?)', [obj.name, obj.email, encrypted], (err, results) => {
        if(err){
            console.log(err);
            res.status(400).json({success: false, message: 'query error', error: err});
            return;
        }

        res.json({success: true, message: 'user created', process: results})
    });
  
    
    
}

const userPut = (req = request, res = response)=>{
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
    userPost,
    userPut,
    userPatch,
    userDelete
}