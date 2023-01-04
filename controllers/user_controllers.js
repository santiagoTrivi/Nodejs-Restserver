const {response, request} = require('express');


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
    //console.log(obj);
    res.json({
        msj: "post api - controller",
        user: {
            name,
            age,
            career 
        }
    });
    console.log(obj);
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