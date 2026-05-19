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
import { hasPermission } from './authorizationMiddleware.mjs';

const uploadArtist = createUploadMiddleware('artists');
const uploadSong   = createUploadMiddleware('songs');
const uploadAlbum  = createUploadMiddleware('albums');

const router = express.Router();


//Primero se verifica si si el usuario tiene acceso y luego si tiene permisos

/**
 * artist
 */
router.get('/artists/', obtenerTodosLosArtistasController);
router.get('/artists/:id', obtenerArtistaPorIdController);
//crear artista
router.post('/artists/agregar', authtenticateToken, hasPermission('artist:create'), uploadArtist, artistValidation, handleValidationErrors, crearNuevoArtistaController);

//editar artista
router.put('/artists/:id/editar', authtenticateToken, hasPermission('artist:update'), uploadArtist, artistValidation, handleValidationErrors, actualizarArtistaController);

//eliminar artista
router.delete('/artists/:id/', hasPermission('artist:delete'), authtenticateToken, eliminarArtistaPorIDController);

/**
 * genres
 */
router.get('/genres/', obtenerTodosLosGenerosController);

//crear
router.post('/genres/agregar', authtenticateToken, hasPermission('genre:create'), genreValidation, handleValidationErrors, crearNuevoGeneroController);

//editar
router.put('/genres/:id/editar', authtenticateToken, hasPermission('genre:update'), genreValidation, handleValidationErrors, actualizarGeneroController);

//eliminar 
router.delete('/genres/:id/', authtenticateToken, hasPermission('genre:delete'), eliminarGeneroPorIDController);

/**
 * songs
 */
router.get('/songs/', obtenerTodasLasCancionesController);

//crear
router.post('/songs/agregar', authtenticateToken, hasPermission('song:create'), uploadSong, songValidation, handleValidationErrors, crearNuevaCancionController);

//editar
router.put('/songs/:id/editar', authtenticateToken, hasPermission('song:update'), uploadSong, songValidation, handleValidationErrors, actualizarCancionController);

//eliminar 
router.delete('/songs/:id/', authtenticateToken, hasPermission('song:delete'), eliminarCancionPorIDController);

//Consumir APIs
router.get('/externa/genre', consumirApiExternaGenerosController);


/**
 * Album
 */
router.get('/albums/', obtenerTodosLosalbumesController);

//crear
router.post('/albums/agregar', authtenticateToken, hasPermission('album:create'), uploadAlbum, albumValidation, handleValidationErrors, crearNuevaAlbumController);

//editar
router.put('/albums/:id/editar', authtenticateToken, hasPermission('album:update'), uploadAlbum, albumValidation, handleValidationErrors, actualizarAlbumController);

//eliminar 
router.delete('/albums/:id/', authtenticateToken, hasPermission('album:delete'), eliminarAlbumPorIDController);


export default router;