import {obtenerArtistaPorId, crearNuevoArtista, actualizarArtista, eliminarArtistaPorID, obtenerTodosLosArtistas,
    consumirApiExternaGeneros, registrarGenerosAPI, crearNuevoGenero, actualizarGenero, 
    eliminarGeneroPorID, obtenerGeneroPorId, obtenerTodosLosGeneros,
    crearNuevaCancion, actualizarCancion, eliminarCancionPorID, obtenerCancionPorId, obtenerTodasLasCanciones,
    crearNuevoAlbum, actualizarAlbum, eliminarAlbumPorID, obtenerAlbumPorId, obtenerTodosLosAlbumes
} from '../services/musicService.mjs';
import { renderizarArtistas, renderizarAlbumes, renderizarCanciones, renderizarGeneros} from '../views/responsiveView.mjs';


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

        // Si se subió imagen, multer la guarda y agrega req.file
        console.log(req.file);
        const imageUrl = req.file 
            ? `img/artists/${req.file.filename}` 
            : datos.imageUrl ?? null;
        
        console.log(datos);
        const datosArtista = {
            name: datos.name,
            biography: datos.biography,
            country: datos.country,
            formedYear: Number(datos.formedYear),
            isActive: datos.isActive === "true" ? true : false,
            imageUrl,
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

        // Si se subió una nueva imagen, reemplaza; si no, conserva la actual
        const imageUrl = req.file 
            ? `img/artists/${req.file.filename}` 
            : datos.imageUrl ?? undefined;

        const datosArtista = {
            name: datos.name,
            biography: datos.biography,
            country: datos.country,
            formedYear: datos.formedYear,
            isActive: datos.isActive,
            imageUrl
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

export const obtenerTodosLosGenerosController = async (req, res) => {
    console.log("en controlador - obtenerTodosLosGenerosController");
    try {
        const generos = await obtenerTodosLosGeneros();
        const generosFormateados = renderizarGeneros(generos);

        res.status(200).json(generosFormateados);
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al obtener los generos',
            error: error.message
        });
    }
    
}


/**
 *  Crear nuevo genero
 */
export const crearNuevoGeneroController = async (req, res) => {
    console.log("en controlador - crearNuevoGeneroController");
    try {
        console.log("body", req.body);
        const datos = req.body;
        console.log(datos);
        const datosFormateados = {
            name: datos.name,
            class: "GENRE",
            creator: "RAMIREZ DIAZ VICTOR FRANCISCO"
        };
        console.log(datosFormateados);

        const created = await crearNuevoGenero(datosFormateados);
    
        res.status(200).json(created);
    } catch(error){
        res.status(500).send({
            mensaje: 'Error en la creación de un nuevo genero',
            error: error.message
        });
    }
}

/*--------------------------*/

/**
 *  Editar un genero
 */


export const actualizarGeneroController = async (req, res) => {
    console.log("en controlador - actualizarGeneroController");
    try {
        const {id} = req.params;

        //console.log(req.body);
        const datos = req.body;
        const datosFormateados = {
            name: datos.name,
        };

        const updatedObject = await actualizarGenero(id, datosFormateados);

        if(!updatedObject){
            return res.status(404).send({mensaje: 'Genero no encontrado'});
        }  

        res.status(200).json(updatedObject);

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al actualizar un genero',
            error: error.message
        });
    }
}  

/*--------------------------*/

/**
 *  Eliminar un genero
 */

export const eliminarGeneroPorIDController = async (req, res) => {
    try {
        const {id} = req.params;
        console.log("en controlador - eliminarGeneroPorIDController");
        //console.log(id);

        const deletedObject = await eliminarGeneroPorID(id);
        //console.log("Artista Eliminado", artistaEliminado);

        if(!deletedObject){
            return res.status(404).send({mensaje: 'Genero no encontrado'});
        }  

        res.status(200).json({
            operation: "delete",
            eliminated: deletedObject,
        });

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al eliminar un genero',
            error: error.message
        });
    }
}

/*--------------------------*/

/**
* Song
*/


export const obtenerTodasLasCancionesController = async (req, res) => {
    console.log("en controlador - obtenerTodasLasCancionesController");
    try {
        const songs = await obtenerTodasLasCanciones();
        const songsFormateadas = renderizarCanciones(songs);

        res.status(200).json(songsFormateadas);
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al obtener las canciones',
            error: error.message
        });
    }
    
}


/** Crear nueva canción */

export const crearNuevaCancionController = async (req, res) => {
    console.log("en controlador - crearNuevaCancionController");
    try {
        console.log("body", req.body);
        const datos = req.body;

        // Si se subió imagen, multer la guarda y agrega req.file
        const imageUrl = req.file 
            ? `img/songs/${req.file.filename}` 
            : datos.imageUrl ?? null;


        console.log(datos);
        const datosFormateados = {
            title: datos.title,
            durationSeconds: datos.durationSeconds,
            lyrics: datos.lyrics,
            artists: datos.artists,
            language: datos.language,
            releaseYear: datos.releaseYear,
            coverUrl: imageUrl,
            class: "SONG",
            creator: "RAMIREZ DIAZ VICTOR FRANCISCO"
        };
        console.log(datosFormateados);

        const created = await crearNuevaCancion(datosFormateados);
    
        res.status(200).json(created);
    } catch(error){
        res.status(500).send({
            mensaje: 'Error en la creación de una nueva canción',
            error: error.message
        });
    }
}

/*--------------------------*/

/**
 *  Editar una canción
 */


export const actualizarCancionController = async (req, res) => {
    console.log("en controlador - actualizarCancionController");
    try {
        const {id} = req.params;

        //console.log(req.body);
        const datos = req.body;

        // Si se subió una nueva imagen, reemplaza; si no, conserva la actual
        const imageUrl = req.file 
            ? `img/songs/${req.file.filename}` 
            : datos.imageUrl ?? undefined;

        const datosFormateados = {
            title: datos.title,
            durationSeconds: datos.durationSeconds,
            lyrics: datos.lyrics,
            artists: datos.artists,
            language: datos.language,
            releaseYear: datos.releaseYear,
            coverUrl: imageUrl
        };

        const updatedObject = await actualizarCancion(id, datosFormateados);

        if(!updatedObject){
            return res.status(404).send({mensaje: 'Canción no encontrada'});
        }  

        res.status(200).json(updatedObject);

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al actualizar una canción',
            error: error.message
        });
    }
}  

/*--------------------------*/

/**
 *  Eliminar una canción
 */

export const eliminarCancionPorIDController = async (req, res) => {
    try {
        const {id} = req.params;
        console.log("en controlador - eliminarCancionPorIDController");
        //console.log(id);

        const deletedObject = await eliminarCancionPorID(id);
        //console.log("Artista Eliminado", artistaEliminado);

        if(!deletedObject){
            return res.status(404).send({mensaje: 'Canción no encontrada'});
        }  

        res.status(200).json({
            operation: "delete",
            eliminated: deletedObject,
        });

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al eliminar una canción',
            error: error.message
        });
    }
}

/*--------------------------*/

/**
* Album
*/


export const obtenerTodosLosalbumesController = async (req, res) => {
    console.log("en controlador - obtenerTodosLosalbumesController");
    try {
        const albums = await obtenerTodosLosAlbumes();
        const albumsFormateados = renderizarAlbumes(albums);

        res.status(200).json(albumsFormateados);
    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al obtener los albumes',
            error: error.message
        });
    }
    
}


/** Crear nuevo album */

export const crearNuevaAlbumController = async (req, res) => {
    console.log("en controlador - crearNuevaAlbumController");
    try {
        console.log("body", req.body);
        const datos = req.body;

        // Si se subió imagen, multer la guarda y agrega req.file
        const imageUrl = req.file 
            ? `img/albums/${req.file.filename}` 
            : datos.imageUrl ?? null;


        console.log(datos);
        const datosFormateados = {
            title: datos.title,
            totalTracks: datos.totalTracks,
            releaseYear: datos.releaseYear,
            releaseDate: datos.releaseDate,
            songs: datos.songs,
            artists: datos.artists,
            language: datos.language,
            coverUrl: imageUrl,
            class: "SONG",
            creator: "RAMIREZ DIAZ VICTOR FRANCISCO"
        };
        console.log(datosFormateados);

        const created = await crearNuevoAlbum(datosFormateados);
    
        res.status(200).json(created);
    } catch(error){
        res.status(500).send({
            mensaje: 'Error en la creación de un nuevo album',
            error: error.message
        });
    }
}

/*--------------------------*/

/**
 *  Editar una canción
 */


export const actualizarAlbumController = async (req, res) => {
    console.log("en controlador - actualizarAlbumController");
    try {
        const {id} = req.params;

        //console.log(req.body);
        const datos = req.body;

        // Si se subió una nueva imagen, reemplaza; si no, conserva la actual
        const imageUrl = req.file 
            ? `img/albums/${req.file.filename}` 
            : datos.imageUrl ?? undefined;

        const datosFormateados = {
            title: datos.title,
            totalTracks: datos.totalTracks,
            releaseYear: datos.releaseYear,
            releaseDate: datos.releaseDate,
            songs: datos.songs,
            artists: datos.artists,
            language: datos.language,
            coverUrl: imageUrl,
        };

        const updatedObject = await actualizarAlbum(id, datosFormateados);

        if(!updatedObject){
            return res.status(404).send({mensaje: 'Album no encontrado'});
        }  

        res.status(200).json(updatedObject);

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al actualizar un album',
            error: error.message
        });
    }
}  

/*--------------------------*/

/**
 *  Eliminar una canción
 */

export const eliminarAlbumPorIDController = async (req, res) => {
    try {
        const {id} = req.params;
        console.log("en controlador - eliminarAlbumPorIDController");
        //console.log(id);

        const deletedObject = await eliminarAlbumPorID(id);
        //console.log("Artista Eliminado", artistaEliminado);

        if(!deletedObject){
            return res.status(404).send({mensaje: 'Album no encontrada'});
        }  

        res.status(200).json({
            operation: "delete",
            eliminated: deletedObject,
        });

    } catch (error) {
        res.status(500).send({
            mensaje: 'Error al eliminar un album',
            error: error.message
        });
    }
}

/*--------------------------*/