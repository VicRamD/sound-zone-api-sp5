import express from 'express';

import {obtenerTodosLosArtistasController, crearNuevoArtistaController, actualizarArtistaController, eliminarArtistaPorIDController,
    consumirApiExternaGenerosController 
} from '../controllers/musicController.mjs';

import {artistValidation} from '../routes/validationRules.mjs';
import {handleValidationErrors} from '../routes/errorHandler.mjs';

import createUploadMiddleware from './uploadMiddleware.mjs';

const uploadArtist = createUploadMiddleware('artists');
const uploadSong   = createUploadMiddleware('songs');
const uploadAlbum  = createUploadMiddleware('albums');

const router = express.Router();

router.get('/artists/', obtenerTodosLosArtistasController);

//crear artista
router.post('/artists/agregar', uploadArtist, artistValidation, handleValidationErrors, crearNuevoArtistaController);

//editar artista
router.put('/artists/:id/editar', uploadArtist, artistValidation, handleValidationErrors, actualizarArtistaController);

//eliminar artista
router.delete('/artists/:id/', eliminarArtistaPorIDController);

//Consumir APIs
router.get('/externa/genre', consumirApiExternaGenerosController);



export default router;