import express, { Application } from 'express';
import useRoutes from '../routes/usuario';
import cors from 'cors';

import db from '../db/connection';

class Server {
    
    private app: express.Application;
    private port: String;
    private apiPaths = {
        usuarios: '/v1/usuarios'
    }

    constructor() {
        this.app = express();
        this.port = process.env.PORT || '8000';

        // Metodos iniciales
        this.dbConnection();
        this.middlewares();
        this.routes();
    }

    async dbConnection() {

        try {    
            await db.authenticate();
            console.log('Mysql OK');
            
        } catch ( error ) {
            throw new Error( error )
        }

    }


    middlewares(){

        // CORS 
        this.app.use( cors());
        
        // Lectura del body
        this.app.use( express.json() );
        
        // Carpeta publica
        this.app.use( express.static('public') );

    }

    routes(){
        this.app.use( this.apiPaths.usuarios, useRoutes );
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log("Server corriendo en http://localhost:" + this.port);
        });
    }

}

export default Server;