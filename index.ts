import Server from './classes/server';
import router from './routes/router';
import bodyParser from 'body-parser';
import cors from 'cors';

const server = new Server();

//Config body paeser
server.app.use(bodyParser.urlencoded({extended: true}));
//de un formato JSON
server.app.use(bodyParser.json());

//Sec onfigura el CORS
//Cualquier persona puede llamar los servicios
server.app.use(cors({ origin: true, credentials:true}));

//Utilizamos el router de router.ts para las rutas de servicios
server.app.use('/', router);

server.start(() => {
    console.log(`Servidor corriendo en el puerto ${server.port}`);
});