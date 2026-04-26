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

export const obtenerGeneroPorId = async (id) => {
    console.log("En servicios - obtenerGeneroPorId");
    return await MusicRepository.obtenerGeneroPorId(id);
}

export const obtenerTodosLosGeneros = async () => {
    console.log("En servicios - obtenerTodosLosGeneros");
    return await MusicRepository.obtenerTodosLosGeneros();
}

export const consumirApiExternaGeneros = async () => {
    console.log("En servicios - consumirApiExternaGeneros");
    try {
        const response = await fetch(apiGenres);
        const objetosRecibidos = await response.json();    
        return objetosRecibidos;
    } catch (error) {
        console.log(error)
    }
}

export const registrarGenerosAPI = async (list) => {
    console.log("En servicios - registrarGenerosAPI");
    return await MusicRepository.registrarGenerosAPI(list);
}

export const crearNuevoGenero = async (data) => {
    console.log("En servicios - crearNuevoGenero");
    return await MusicRepository.crearNuevoGenero(data);
}

export const actualizarGenero = async (id, data) => {
    console.log("En servicios - actualizarGenero");
    return await MusicRepository.actualizarGenero(id, data);
}

export const eliminarGeneroPorID = async (id) => {
    console.log("En servicios - eliminarGeneroPorID");
    return await MusicRepository.eliminarGeneroPorID(id);
}

/**
* Songs
*/

/*
export const consumirApiExternaGeneros = async () => {
    console.log("En servicios - consumirApiExternaGeneros");
    try {
        const response = await fetch(apiGenres);
        const objetosRecibidos = await response.json();    
        return objetosRecibidos;
    } catch (error) {
        console.log(error)
    }
}  */

export const obtenerCancionPorId = async (id) => {
    console.log("En servicios - obtenerCancionPorId");
    return await MusicRepository.obtenerCancionPorId(id);
}

export const obtenerTodasLasCanciones = async () => {
    console.log("En servicios - obtenerTodosLasCanciones");
    return await MusicRepository.obtenerTodasLasCanciones();
}

export const registrarCancionesAPI = async (list) => {
    console.log("En servicios - registrarCancionesAPI");
    return await MusicRepository.registrarCancionesAPI(list);
}

export const crearNuevaCancion = async (data) => {
    console.log("En servicios - crearNuevaCancion");
    return await MusicRepository.crearNuevaCancion(data);
}

export const actualizarCancion = async (id, data) => {
    console.log("En servicios - actualizarCancion");
    return await MusicRepository.actualizarCancion(id, data);
}

export const eliminarCancionPorID = async (id) => {
    console.log("En servicios - eliminarCancionPorID");
    return await MusicRepository.eliminarCancionPorID(id);
}

/**
 *  Albums
 */

export const obtenerAlbumPorId = async (id) => {
    console.log("En servicios - obtenerAlbumPorId");
    return await MusicRepository.obtenerAlbumPorId(id);
}

export const obtenerTodosLosAlbumes = async () => {
    console.log("En servicios - obtenerTodosLosAlbumes");
    return await MusicRepository.obtenerTodosLosAlbumes();
}


export const registrarAlbumesAPI = async (list) => {
    console.log("En servicios - registrarAlbumesAPI");
    return await MusicRepository.registrarAlbumesAPI(list);
}

export const crearNuevoAlbum = async (data) => {
    console.log("En servicios - crearNuevoAlbum");
    return await MusicRepository.crearNuevoAlbum(data);
}

export const actualizarAlbum = async (id, data) => {
    console.log("En servicios - actualizarAlbum");
    return await MusicRepository.actualizarAlbum(id, data);
}

export const eliminarAlbumPorID = async (id) => {
    console.log("En servicios - eliminarAlbumPorID");
    return await MusicRepository.eliminarAlbumPorID(id);
}

