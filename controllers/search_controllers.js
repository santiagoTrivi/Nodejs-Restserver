const { request, response } = require("express");
const {Op} = require("sequelize");
const { database } = require("../db/orm_connection");
const { User, Category } = require("../models");


const searchUser = async (term = '', res = response) =>{
    
    // where:{$or: [{name: {$iLike: {$in: term}}}, {email: {$iLike: {$in: term}}} ]}
    
    try {
        const users = await User.findAll({where:{
            [Op.or]:[
                {
                    name: {[Op.substring]: term}
                },
                {
                    email: {[Op.substring]: term}
                }
            ],
            [Op.and]:[
                {
                    status: 1
                }
            ]
        }});
        res.json({
            result: users
        });
    } catch (error) {
        res.status(500).json(error);
    }
};

const searchCategory = async (term = '', res = response) =>{
    
    // where:{$or: [{name: {$iLike: {$in: term}}}, {email: {$iLike: {$in: term}}} ]}
    
    try {
        const categories = await Category.findAll({where:{
            [Op.or]:[
                {
                    id: {[Op.substring]: term}
                },
                {
                    category: {[Op.substring]: term}
                }
            ],
            [Op.and]:[
                {
                    status: 1
                }
            ]
        }});
        res.json({
            result: categories
        });
    } catch (error) {
        res.status(500).json(error);
    }
};



const getSearch = async (req = request, res = response) =>{

    const {collection, term} = req.params;
    
    switch (collection){
        
    case 'user':
        searchUser(term, res);
    break;
        
    case 'category':
        searchCategory(term, res);
    break;

    case 'product':
    break; 
    
    default:
        res.status(500).json({
            message: 'incorrect search, try again'
        })
    };
};

module.exports = {
    getSearch
};