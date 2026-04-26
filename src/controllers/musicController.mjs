import {obtenerArtistaPorId, crearNuevoArtista, actualizarArtista, eliminarArtistaPorID, obtenerTodosLosArtistas,
    consumirApiExternaGeneros, registrarGenerosAPI
} from '../services/musicService.mjs';
import { renderizarArtistas} from '../views/responsiveView.mjs';


export const renderizarLandingPage = (req, res) => {
    res.render('home', {titulo: "Sound Zone"});
}

export const renderizarAbout = (req, res) => {
    res.render('about', {titulo: "Acerca De"});
}

/**
* Artists
*/

export const obtenerTodosLosArtistasController = async (req, res) => {
    console.log("en controlador - obtenerTodosLosArtistasController");
    try {
        const artistas = await obtenerTodosLosArtistas();
        const artistasFormateados = renderizarArtistas(artistas);

        res.status(200).json(artistasFormateados);
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al obtener los artistas',
            error: error.message
        });
    }
    
}


/**
 *  Crear nuevo artista
 */


export const crearNuevoArtistaController = async (req, res) => {
    console.log("en controlador - crearNuevoArtistaController");
    try {
        console.log("body", req.body);
        const datos = req.body;
        console.log(datos);
        const datosArtista = {
            name: datos.name,
            biography: datos.biography,
            country: datos.country,
            formedYear: datos.formedYear,
            isActive: datos.isActive,
            imageUrl: datos.imageUrl,
            class: "ARTIST",
            creator: "RAMIREZ DIAZ VICTOR FRANCISCO"
        };
        console.log(datosArtista);

        const artistaCreado = await crearNuevoArtista(datosArtista);
    
        res.status(200).json(artistaCreado);
    } catch(error){
        res.status(500).send({
            mensaje: 'Error en la creación de un nuevo artista',
            error: error.message
        });
    }
}

/*--------------------------*/

/**
 *  Editar un artista
 */


export const actualizarArtistaController = async (req, res) => {
    console.log("en controlador - actualizarArtistaController");
    try {
        const {id} = req.params;

        //console.log(req.body);
        const datos = req.body;
        const datosArtista = {
            name: datos.name,
            biography: datos.biography,
            country: datos.country,
            formedYear: datos.formedYear,
            isActive: datos.isActive,
            imageUrl: datos.imageUrl
        };


        console.log(datosArtista);

        const artistaActualizado = await actualizarArtista(id, datosArtista);
        console.log("Actualizar artista", artistaActualizado);

        if(!artistaActualizado){
            return res.status(404).send({mensaje: 'Artista no encontrado'});
        }  

        res.status(200).json(artistaActualizado);

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al actualizar un artista',
            error: error.message
        });
    }
}  

/*--------------------------*/

/**
 *  Eliminar un artista
 */

export const eliminarArtistaPorIDController = async (req, res) => {
    try {
        const {id} = req.params;
        console.log("en controlador - eliminarArtistaPorIDController");
        //console.log(id);

        const artistaEliminado = await eliminarArtistaPorID(id);
        console.log("Artista Eliminado", artistaEliminado);

        if(!artistaEliminado){
            return res.status(404).send({mensaje: 'Artista no encontrado'});
        }  

        res.status(200).json({
            operation: "delete",
            eliminated: artistaEliminado,
        });

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al eliminar un artista',
            error: error.message
        });
    }
}

/*--------------------------*/

/**
* Genres
*/

export const consumirApiExternaGenerosController = async (req, res) => {
    try {
        console.log("En controladores - consumirApiExternaGenerosController");
        const listaDeGenerosMusicales = await consumirApiExternaGeneros();
        const listaFormateada = listaDeGenerosMusicales.map(genero => {
            return {
                name: genero.name,
                class: "GENRE",
            }
        })

        //registrar en la BD
        const recetasRegistradas = await registrarGenerosAPI(listaFormateada);
        res.status(200).json({
            operation: "create",
        });
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al consumir API',
            error: error.message
        });
    }
}