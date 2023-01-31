const { request, response } = require("express");





const getSearch = (req = request, res = response) =>{
    const {collection, term} = req.params;
    res.json({
        message: 'correct response',
        collection,
        term
    });
};

module.exports = {
    getSearch
};