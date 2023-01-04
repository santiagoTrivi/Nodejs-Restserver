const express = require('express');
const hbs = require('hbs');


class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.userRouters = '/api/users'; // main endpoint the set the routes for each methods (get, post, patch, put and delete) which is used in the middlaware

        // Middlewares
        this.middelawares();

        // Rutas de mi app
        this.routes();
    }

    middelawares(){

        // to read and recieve info from the body
        this.app.use(express.json());

        // dirrectorio publico
        //this.app.use(express.static('public'));

        //
        //this.app.set('view engine', 'hbs');


    }

    routes(){


        // middelaware to requess the routes created in the folder routes
        this.app.use(this.userRouters, require('../routes/user_routes'));

    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`restserver running on http//localhost:${this.port}/ || press ctrl + c to exit`)
        });
    }
    
}

module.exports = Server;