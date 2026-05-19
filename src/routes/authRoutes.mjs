import express from 'express';

import {registrarUsuario, inicioDeSesionUsuario, crearPermisos, obtenerTodosLosPermisosController,
    crearRoles, obtenerTodosLosRolesController
} from '../controllers/authController.mjs';

const router = express.Router();

router.post('/register', registrarUsuario);
router.post('/login', inicioDeSesionUsuario);

router.get('/permissions/', obtenerTodosLosPermisosController);
router.get('/permissions/add', crearPermisos);

router.get('/roles/', obtenerTodosLosRolesController);
router.get('/roles/add', crearRoles);

export default router;

