const { request, response } = require("express");


const getCategory = (req = request, res = response) => {
    res.json({messange: 'correct response'});
};

const getCategories = (req = request, res = response) => {
    res.json({message: 'correct response'});
};

const postCategory = (req = request, res = response) => {
    const {name} = req.body;
    const admin = req.authUser;

    res.json({name, admin});
};


module.exports = {
    getCategory,
    getCategories,
    postCategory
}