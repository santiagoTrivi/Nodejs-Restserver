const {DataTypes} = require('sequelize');
const {database}= require('../db/orm_connection');


const Product = database.define('Product',{
   
});



module.exports = {
    Product
};