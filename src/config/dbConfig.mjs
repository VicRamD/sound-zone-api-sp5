import mongoose from 'mongoose';

import {config} from "dotenv";

config();
const connectionString=process.env.CONNECTION_STRING || "constring";

export async function connectDB(){
    try {
        await mongoose.connect(connectionString);
        console.log('Conexión exitosa a MongoDB');
    } catch(error) {
        console.error('Error al conectar a MongoDB: ', error);
        process.exit(1);
    }
}

// file: fs-sync-example.mjs
//import fs from 'node:fs';
//import path from 'path';
//import { fileURLToPath } from 'url';

//ruta absoluta del archivo app.mjs
//const __filename = fileURLToPath(import.meta.url);
//console.log("filename: ", __filename)

//directorio en que se encuentra el archivo app.mjs
//const __dirname = path.dirname(__filename);
//console.log("dirname: ", __dirname);

//console.log(typeof path.join(__dirname, 'constring.txt'));
//console.log(fs.readFileSync(path.join(__dirname, 'constring.txt'), 'utf8'));
//console.log(typeof fs.readFileSync(path.join(__dirname, 'constring.txt'), 'utf8'));

