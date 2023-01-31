const bodyParser = require('body-parser');
const express = require('express');
const hbs = require('hbs');
const {database} = require('../db/orm_connection');
const cors = require('cors');


class Server{

    constructor (){
        this.app = express();
        this.port = process.env.PORT;
        this.userRouters = '/api/users'; // main endpoint that sets the routes for each methods user (get, post, patch, put and delete) which is used in the middlaware
        this.authPath = '/api/auth'; // second endpoint that sets the login function in the api

        this.path = {
            userRouters: '/api/users',
            authPath: '/api/auth',
            category: '/api/category',
            product: '/api/product',
            search: '/api/search'
        }

        // database connection
        this.Connection();

        // Middlewares
        this.middelawares();

        // Rutas de mi app
        this.routes();
    }

    // method to create the connection to the database in mysql
    async Connection(){
         try {
            await database.authenticate();
            console.log('database connected');
         } catch (error) {
            throw new Error(error);
         } 
    }


    middelawares(){

        // to read and recieve info from the body
        this.app.use(express.json());

        // dirrectorio publico
        this.app.use(express.static('public'));

        //
        //this.app.set('view engine', 'hbs');

        // body-parser
        this.app.use(bodyParser.urlencoded({ extended: true }));

        this.app.use(cors());

    }

    routes(){


        // middelaware to requess the routes created in the folder routes
        this.app.use(this.path.userRouters, require('../routes/user_routes'));
        this.app.use(this.path.authPath, require('../routes/auth_routes'));
        this.app.use(this.path.category, require('../routes/category_routes'));
        this.app.use(this.path.product, require('../routes/product_routes'));
        this.app.use(this.path.search, require('../routes/search_routes'));

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`restserver running on http//localhost:${this.port}/ || press ctrl + c to exit`)
        });
    }
    
}

module.exports = Server;