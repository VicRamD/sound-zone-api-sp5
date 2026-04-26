import MusicRepository from "../repository/MusicRepository.mjs";

import {config} from "dotenv";
config();
const apiGenres=process.env.API_EXT_GENRES || undefined;

//import fs from 'node:fs';
//import path from 'path';
//import { fileURLToPath } from 'url';

//ruta absoluta del archivo app.mjs
//const __filename = fileURLToPath(import.meta.url);
//console.log("filename: ", __filename)

//directorio en que se encuentra el archivo app.mjs
//const __dirname = path.dirname(__filename);
//console.log("dirname: ", __dirname);

/**
* Artists
*/
export const registrarArtistasAPI = async (listaDeArtistas) => {
    console.log("En servicios - registrarArtistasAPI");
    return await MusicRepository.registrarArtistasAPI(listaDeArtistas);
}

export const obtenerArtistaPorId = async (id) => {
    console.log("En servicios - obtenerArtistaPorId");
    return await MusicRepository.obtenerArtistaPorId(id);
}

export const obtenerTodosLosArtistas = async () => {
    console.log("En servicios - obtenerTodosLosArtistas");
    return await MusicRepository.obtenerTodosLosArtistas();
}

/*export const obtenerRecetasPorRegion = async (region) => {
    console.log("En servicios - obtenerRecetasPorRegion");
    return await RecetaRepository.obtenerRecetasPorRegion(region);
} */

export const crearNuevoArtista = async (artistData) => {
    console.log("En servicios - crearNuevoArtista");
    return await MusicRepository.crearNuevoArtista(artistData);
}

export const actualizarArtista = async (id, artistData) => {
    console.log("En servicios - actualizarArtista");
    return await MusicRepository.actualizarArtista(id, artistData);
}

export const eliminarArtistaPorID = async (id) => {
    console.log("En servicios - eliminarArtistaPorID");
    return await MusicRepository.eliminarArtistaPorID(id);
}

/**
* Genres
*/

export const consumirApiExternaGeneros = async () => {
    console.log("En servicios - consumirApiExternaGeneros");
    try {
        const response = await fetch(apiGenres);
        const generosRecibidos = await response.json();    
        return generosRecibidos;
    } catch (error) {
        console.log(error)
    }
}

export const registrarGenerosAPI = async (listaDeGeneros) => {
    console.log("En servicios - registrarGenerosAPI");
    return await MusicRepository.registrarGenerosAPI(listaDeGeneros);
}