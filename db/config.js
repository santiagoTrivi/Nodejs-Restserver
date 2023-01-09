const mysql = require('mysql2');


const dbconnection = async () =>{

    try {

        await mysql.createConnection({
            host: process.env.HOST_DB,
            user: process.env.USER_DB,
            password: process.env.PASSWORD_DB,
            database: process.env.DATABAES_DB
        });

        console.log('mysqlDatabse connected');
        
    } catch (error) {
        console.log(error);
        
    }

    

}

module.exports = { 
    dbconnection
}