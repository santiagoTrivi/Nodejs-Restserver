const { request, response } = require("express");
const { Category } = require("../models");





const getProduct = (req = request, res = response) => {

    res.json({
        message: 'correct response'
    });


};

const getProductById = (req = request, res = response) => {

    const {id} = req.params;

    res.json({
        message: 'correct response',
        id
    });


};

const postProduct = async (req = request, res = response) => {

    let {productName, unitprice, category} = req.body;

    try {
        //const valid = await Category.findOne({ where: { category} });
        console.log(category);
        res.json({
            message: 'correct response',
            productName,
            unitprice,
            

        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            error
        });
    }
    


};

const putProduct = (req = request, res = response) => {

    const {id} = req.params;

    res.json({
        message: 'correct response',
        id
    });


};

const deleteProduct = (req = request, res = response) => {


    res.json({
        message: 'correct response'
    });


};

module.exports = {
    getProduct,
    getProductById,
    postProduct,
    putProduct,
    deleteProduct
};