const {DataTypes} = require('sequelize');
const {database} = require('../db/orm_connection');

const User = database.define('User', {
    
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    },
    rol_id: {
        type: DataTypes.INTEGER
    },
});



const Rol = database.define('rol', {
    
    rol: {
        type: DataTypes.STRING
    }
});




module.exports = {
    User,
    Rol
};