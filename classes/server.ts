import express from 'express';
import { SERVER_PORT } from '../global/environment';

//Definicion y exportacion de clase
export default class Server {
    public app: express.Application;
    public port: number;

    constructor(){
        this.app = express();
        this.port = SERVER_PORT;
    }

    //Metodo para inicar el servidor
    start(callback:any){
        this.app.listen(this.port, callback);
    }

}