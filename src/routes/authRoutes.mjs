import express from 'express';

import {registrarUsuario, inicioDeSesionUsuario, crearPermisos} from '../controllers/authController.mjs';

const router = express.Router();

router.post('/register', registrarUsuario);
router.post('/login', inicioDeSesionUsuario);
router.get('/permissions/add', crearPermisos);

export default router;

