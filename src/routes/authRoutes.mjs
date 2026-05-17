import express from 'express';

import {registrarUsuario, inicioDeSesionUsuario} from '../controllers/authController.mjs';

const router = express.Router();

router.post('/register', registrarUsuario);
router.post('/login', inicioDeSesionUsuario);

export default router;

