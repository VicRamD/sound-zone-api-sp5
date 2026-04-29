import express from 'express';
import {connectDB} from './config/dbConfig.mjs';
import methodOverride from 'method-override';

import musicRoutes from './routes/musicRoutes.mjs';

import expressLayouts from 'express-ejs-layouts';

//para renderizar las vistas
import path from 'path';
import { fileURLToPath } from 'url';

import {renderizarLandingPage, renderizarAbout} from './controllers/musicController.mjs';

import {config} from "dotenv";

import cors from 'cors';
//const cors = require('cors');

config();
const corsDomain1=process.env.CORS_DOMAIN1 || undefined;






const app = express();
const PORT = process.env.PORT || 3000;


app.use(cors({
  origin: [corsDomain1], //'http://localhost:5173' o '*' para permitir cualquier origen ['http://localhost:5173', 'https://tu-dominio-en-produccion.com']
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

// Middleware para parsear JSON
app.use(express.json());
//Middleware para trabajar con el enctype application/x-www-form-urlencoded por defecto del form
app.use(express.urlencoded({ extended: true }));

/* Sobreescribir peticiones con ej: ?_method=DELETE */
app.use(methodOverride('_method'));

//Conexión a MongoDB
connectDB();

/*
*Configurarción del motor de vistas
*/

//ruta absoluta del archivo app.mjs
const __filename = fileURLToPath(import.meta.url);
//console.log("filename: ", __filename)

//directorio en que se encuentra el archivo app.mjs
const __dirname = path.dirname(__filename);
//console.log("dirname: ", __dirname);

//establece la ruta a carpeta views
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

//configurar express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout') //archivo base de layout

/*-------------------------------- */

//servir archivos estaticos
//console.log(path.join(__dirname, 'public'));
app.use(express.static(path.join(__dirname, 'public')));

/*-------------------------------- */

//pagina de incio
app.get('/', renderizarLandingPage);

//Acerca de
app.get('/acerca', renderizarAbout);

//configuración de rutas
app.use('/api', musicRoutes);

//Iniciar el servidor
app.listen(PORT, ()=> {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
})
/*para levantar el servido en render es necesario configurar el puerto http al
 que render va a escuchar, en este caso 0.0.0.0*/
/* app.listen(PORT, '0.0.0.0', ()=> {
    console.log(`Servidor levantando en el puerto ${PORT} desde el servidor`);
}) */