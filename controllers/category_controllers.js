const { request, response } = require("express");
const {Category} = require('../models/categoryData');


const getCategory = async(req = request, res = response) => {
    try {
        const categories = await Category.findAll({where: {status: 1}});
        const total = await Category.count({where: {status: 1}});
        res.json({
            messange: 'correct response', 
            total, 
            categories
        });

    } catch (error) {
        console.log({error});
    }
    
};

const getCategoryByPk = async (req = request, res = response) => {

    

    try {
        const id = req.params.id;
        const category = await Category.findByPk(id);

        res.json({
            messange: 'correct response',  
            category
        });

    } catch (error) {
        console.log({error});
    }


};

const postCategory = async (req = request, res = response) => {
    const categoryName = req.body.name;
    const admin = req.authUser;
    const userID = admin.id;

    try {

        const newCategory = new Category({categoryName, userID});
        await newCategory.save();
        res.json({newCategory});

    } catch (error) {
        console.log(error);
        res.json({error});
    }

    
};

const deleteCategory = async (req = request, res = response) => {

    

    try {
        const id = req.params.id;
        const category = await Category.findByPk(id);
    
        category.set({status: 0});
        category.save();

        res.json({
            menssage: "the category has been deleted successfully",
            category
        });

    } catch (error) {
        console.log({error});
    }


};


module.exports = {
    getCategory,
    getCategoryByPk,
    postCategory,
    deleteCategory
}