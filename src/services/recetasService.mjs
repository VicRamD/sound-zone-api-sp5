//https://restcountries.com/v3.1/region/america

import RecetaRepository from '../repository/RecetaRepository.mjs';

import {config} from "dotenv";

config();
const apiKeySpoontacoolar=process.env.API_KEY_SPOONT || "apikey";

//import fs from 'node:fs';
//import path from 'path';
//import { fileURLToPath } from 'url';

//ruta absoluta del archivo app.mjs
//const __filename = fileURLToPath(import.meta.url);
//console.log("filename: ", __filename)

//directorio en que se encuentra el archivo app.mjs
//const __dirname = path.dirname(__filename);
//console.log("dirname: ", __dirname);


export const consumirApiExternaDeRecetas = async () => {
    //const regionesValidas = ["African", "Asian", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"]
    const regionesValidas = ["Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"];
    console.log("En servicios - consumirApiExternaDeRecetas");
    //console.log(fs.readFileSync(path.join(__dirname, 'apiSpoontacular.txt'), 'utf8'));
    //console.log(typeof fs.readFileSync(path.join(__dirname, 'apiSpoontacular.txt'), 'utf8'));

    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("x-api-key", apiKeySpoontacoolar);

    let recetas = [];
    /*const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=${true}&number=${1}&cuisine=${regionesValidas[0]}`, {
            method: 'GET',
            headers: myHeaders
    });  
    let recetasRecibidas = await response.json();    
    //console.log("response", response);
    //console.log("Resultados", recetasRecibidas.results);
    recetas.push(recetasRecibidas.results); */


    for (const region of regionesValidas) {
        const response = await fetch(
            `https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation=true&number=1&cuisine=${encodeURIComponent(region)}`,
            { method: 'GET', headers: myHeaders }
        );
        const recetasRecibidas = await response.json();
        console.log(recetasRecibidas.results[0]);
        if (recetasRecibidas.results && recetasRecibidas.results[0]) {
            recetas.push(recetasRecibidas.results[0]);
        }
    }
    
    console.log(recetas);
    return recetas;
    //includeIngredients  addRecipeInformation
    
    //https://api.spoonacular.com/recipes/complexSearch?addRecipeInformation={{ $json.DESEO_INSTRUCCIONES_DE_LA_RECETA }}&number={{ $json.NUMERO_DE_RECETAS }}&cuisine={{ $json.TIPO_DE_COCINA }}
};

export const registrarRecetasAPI = async (listaDeRecetas) => {
    console.log("En servicios - registrarRecetasAPI");
    //console.log(listadoPaises);
    return await RecetaRepository.registrarRecetasAPI(listaDeRecetas);
}

export const obtenerPaisPorId = async (id) => {
    console.log("En servicios - obtenerPaisPorId");
    return await RecetaRepository.obtenerPaisPorId(id);
}

export const obtenerTodosLosPaises = async () => {
    console.log("En servicios - obtenerTodosLosPaises");
    return await RecetaRepository.obtenerTodosLosPaises();
}

export const obtenerTodasLasRecetas = async () => {
    console.log("En servicios - obtenerTodasLasRecetas");
    return await RecetaRepository.obtenerTodasLasRecetas();
}

export const obtenerRecetasPorRegion = async (region) => {
    console.log("En servicios - obtenerRecetasPorRegion");
    return await RecetaRepository.obtenerRecetasPorRegion(region);
}

export const crearNuevoPais = async (datosPais) => {
    console.log("En servicios - crearNuevoPais");
    return await RecetaRepository.crearNuevoPais(datosPais);
}

export const actualizarPais = async (id, datosPais) => {
    console.log("En servicios - actualizarPais");
    return await RecetaRepository.actualizarPais(id, datosPais);
}

export const eliminarPaisPorID = async (id) => {
    console.log("En servicios - crearNuevoPais");
    return await RecetaRepository.eliminarPaisPorID(id);
}
