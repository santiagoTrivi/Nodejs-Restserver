const {DataTypes} = require('sequelize');
const {database} = require('../db/orm_connection');

const Category = database.define('Category',{
    id: {
        type: DataTypes.INTEGER,
        require: false,
        primaryKey: true
    },
    categoryName: {
        type: DataTypes.STRING
    },
    userID: {
        type: DataTypes.INTEGER
    },
    status: {
        type: DataTypes.TINYINT
    }
});

module.exports = {
    Category
};