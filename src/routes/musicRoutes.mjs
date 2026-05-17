import express from 'express';

import {obtenerTodosLosArtistasController, obtenerArtistaPorIdController, crearNuevoArtistaController, 
    actualizarArtistaController, eliminarArtistaPorIDController,
    consumirApiExternaGenerosController, obtenerTodosLosGenerosController, crearNuevoGeneroController, 
    actualizarGeneroController, eliminarGeneroPorIDController,
    obtenerTodosLosalbumesController, crearNuevaAlbumController, actualizarAlbumController, eliminarAlbumPorIDController,
    obtenerTodasLasCancionesController, crearNuevaCancionController, actualizarCancionController, eliminarCancionPorIDController

} from '../controllers/musicController.mjs';

import {artistValidation, songValidation, albumValidation, genreValidation} from '../routes/validationRules.mjs';
import {handleValidationErrors} from '../routes/errorHandler.mjs';

import createUploadMiddleware from './uploadMiddleware.mjs';
import { obtenerTodosLosAlbumes } from '../services/musicService.mjs';

import { authtenticateToken } from './authMiddleware.mjs';

const uploadArtist = createUploadMiddleware('artists');
const uploadSong   = createUploadMiddleware('songs');
const uploadAlbum  = createUploadMiddleware('albums');

const router = express.Router();

/**
 * artist
 */
router.get('/artists/', obtenerTodosLosArtistasController);
router.get('/artists/:id', obtenerArtistaPorIdController);
//crear artista
router.post('/artists/agregar', authtenticateToken, uploadArtist, artistValidation, handleValidationErrors, crearNuevoArtistaController);

//editar artista
router.put('/artists/:id/editar', authtenticateToken, uploadArtist, artistValidation, handleValidationErrors, actualizarArtistaController);

//eliminar artista
router.delete('/artists/:id/', authtenticateToken, eliminarArtistaPorIDController);

/**
 * genres
 */
router.get('/genres/', obtenerTodosLosGenerosController);

//crear
router.post('/genres/agregar', authtenticateToken, genreValidation, handleValidationErrors, crearNuevoGeneroController);

//editar
router.put('/genres/:id/editar', authtenticateToken, genreValidation, handleValidationErrors, actualizarGeneroController);

//eliminar 
router.delete('/genres/:id/', authtenticateToken, eliminarGeneroPorIDController);

/**
 * songs
 */
router.get('/songs/', obtenerTodasLasCancionesController);

//crear
router.post('/songs/agregar', authtenticateToken, uploadSong, songValidation, handleValidationErrors, crearNuevaCancionController);

//editar
router.put('/songs/:id/editar', authtenticateToken, uploadSong, songValidation, handleValidationErrors, actualizarCancionController);

//eliminar 
router.delete('/songs/:id/', authtenticateToken, eliminarCancionPorIDController);

//Consumir APIs
router.get('/externa/genre', consumirApiExternaGenerosController);


/**
 * Album
 */
router.get('/albums/', obtenerTodosLosalbumesController);

//crear
router.post('/albums/agregar', authtenticateToken, uploadAlbum, albumValidation, handleValidationErrors, crearNuevaAlbumController);

//editar
router.put('/albums/:id/editar', authtenticateToken, uploadAlbum, albumValidation, handleValidationErrors, actualizarAlbumController);

//eliminar 
router.delete('/albums/:id/', authtenticateToken, eliminarAlbumPorIDController);


export default router;