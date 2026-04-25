import {validationResult} from 'express-validator';

import {consumirApiExternaDeRecetas, registrarRecetasAPI, obtenerTodosLosPaises, obtenerRecetasPorRegion, obtenerTodasLasRecetas,
    obtenerPaisPorId, crearNuevoPais, actualizarPais, eliminarPaisPorID
} from '../services/recetasService.mjs';
import {mapearRecetas} from '../models/mapearDatosApi.mjs';
import {renderizarPaises, renderizarRecetas} from '../views/responsiveView.mjs';

import {config} from "dotenv";

config();
const dominioChatBot=process.env.DOMAIN || "url";

export const renderizarLandingPage = (req, res) => {
    //console.log(dominioChatBot)
    res.render('home', {titulo: "Comidas del mundo", direccion: dominioChatBot});
}

export const renderizarAbout = (req, res) => {
    res.render('about', {titulo: "Acerca De", direccion: dominioChatBot});
}

export const consumirApiExternaDeRecetasController = async (req, res) => {
    try {
        console.log("En controladores - consumirApiExternaDeRecetasController");
        const listaDeRecetas = await consumirApiExternaDeRecetas();
        //filtra los que incluyen spa en languages
        //lista formateada
        const listaFormateada = mapearRecetas(listaDeRecetas);

        //registrar en la BD
        const recetasRegistradas = await registrarRecetasAPI(listaFormateada);
        res.status(200).json(recetasRegistradas);
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al consumir API',
            error: error.message
        });
    }
}

// Dashboard
export const obtenerTodosLosPaisesController = async (req, res) => {
    console.log("en controlador - obtenerTodosLosPaisesController");
    try {
        const paises = await obtenerTodosLosPaises();
        const paisesFormateados = renderizarPaises(paises);

        res.render('dashboard', {titulo: 'Listado de Países', paises: paisesFormateados});
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al obtener los países',
            error: error.message
        });
    }
    
}

export const obtenerTodasLasRecetasController = async (req, res) => {
    console.log("en controlador - obtenerTodasLasRecetasController");
    try {
        const recetas = await obtenerTodasLasRecetas();
        const recetasFormateadas = renderizarRecetas(recetas);

        res.status(200).json(recetasFormateadas);

        //res.render('dashboard', {titulo: 'Listado de Países', paises: paisesFormateados});
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al obtener los países',
            error: error.message
        });
    }
    
}

export const obtenerRecetasPorRegionController = async (req, res) => {
    console.log("en controlador - obtenerRecetasPorRegionController");
    try {
        const {region} = req.query;
        console.log(region);
        let regionPrimerMayus = region.charAt(0).toUpperCase() + region.slice(1);
        console.log(regionPrimerMayus);
        const recetas = await obtenerRecetasPorRegion(regionPrimerMayus);
        const recetasFormateadas = renderizarRecetas(recetas);

        res.status(200).json(recetasFormateadas);

        //res.render('dashboard', {titulo: 'Listado de Países', paises: paisesFormateados});
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al obtener los países',
            error: error.message
        });
    }
    
}

/**
 *  Crear nuevo país
 */

export const renderizarFormCrearNuevoPaiController = (req, res) => {
    console.log("en controlador - renderizarFormCrearNuevoPaiController");
    res.render('addPais', {titulo: 'Nuevo País', camposErroneos: [], mensajesDeError: []});
}

export const crearNuevoPaisController = async (req, res) => {
    console.log("en controlador - crearNuevoPaisController");
    try {
        console.log("body", req.body);
        const datos = req.body;
        console.log(datos);
        const datosPais = {
            nombreComun: datos.nombreComunPais,
            nombreOficial: datos.nombreOficialPais,
            capital: datos.capitalPais,
            fronteras: datos.paisesFrontera,
            area: datos.areaPais,
            poblacion: datos.poblacionPais,
            timezones: datos.timezones ? datos.timezones : [],
            creador: "RAMIREZ DIAZ VICTOR FRANCISCO"
        };
        console.log(datosPais);

        const paisCreado = await crearNuevoPais(datosPais);
        console.log(paisCreado);
        
        res.redirect('/api/paises');
    } catch(error){
        res.status(500).send({
            mensaje: 'Error en la creación de un nuevo país',
            error: error.message
        });
    }
}

/*--------------------------*/

/**
 *  Editar un país
 */

export const renderizarFormEditarPaisController = async (req, res) => {
    console.log("en controlador - renderizarFormEditarPaisController");
    try {
        const {id} = req.params;
        //console.log(id);
        const pais = await obtenerPaisPorId(id); 
        console.log(pais);
        if(!pais){
            return res.status(404).send({mensaje: 'Pais no encontrado'});
        }    

        res.render('editPais', {valoresRetornados: pais, titulo: 'Editar Pais', camposErroneos: [], mensajesDeError: []});
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al buscar país',
            error: error.message
        });
    }
}

export const actualizarPaisController = async (req, res) => {
    console.log("en controlador - actualizarPaisController");
    try {
        const {id} = req.params;

        console.log(req.body);
        const datos = req.body;
        const datosPais = {
            nombreComun: datos.nombreComunPais,
            nombreOficial: datos.nombreOficialPais,
            capital: datos.capitalPais,
            fronteras: datos.paisesFrontera,
            area: datos.areaPais,
            poblacion: datos.poblacionPais,
            timezones: datos.timezones ? datos.timezones : [],
        };
        console.log(datosPais);

        const paisActualizado = await actualizarPais(id, datosPais);
        console.log("Actualizar país", paisActualizado);

        if(!paisActualizado){
            return res.status(404).send({mensaje: 'País no encontrado'});
        }  

        res.redirect('/api/paises');

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al actualizar un país',
            error: error.message
        });
    }
}  

/*--------------------------*/

/**
 *  Eliminar un país
 */

export const eliminarPaisPorIDController = async (req, res) => {
    try {
        const {id} = req.params;
        console.log("en controlador - eliminarPaisPorIDController");
        //console.log(id);

        const paisEliminado = await eliminarPaisPorID(id);
        console.log("País Eliminado", paisEliminado);

        if(!paisEliminado){
            return res.status(404).send({mensaje: 'País no encontrado'});
        }  

        res.redirect('/api/paises');

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al eliminar un país',
            error: error.message
        });
    }
}

/*--------------------------*/