import AuthService from "../services/authService.mjs";

import { permissionsSeed } from "../models/static/staticData.mjs";

import { renderizarPermisos } from '../views/responsiveView.mjs';

export const registrarUsuario = async (req, res) => {
    console.log("en controlador - registrarUsuario");
    try {
        const result = await AuthService.register({
            ...req.body,
            class: "USER"
        });
        res.status(201).json(result);
    } catch (err) {
        console.log("Error en registro:", err);
        res.status(400).json({error: err.message});
    }
} 

export const inicioDeSesionUsuario = async (req, res) => {
    console.log("en controlador - inicioDeSesionUsuario");
    try {
        const {email, password} = req.body;
        const result = await AuthService.login(email, password);
        res.json(result);
    } catch (err) {
        console.log("Error en login:", err);
        res.status(400).json({error: err.message});
    }
} 

//permisos
export const crearPermisos = async (req, res) => {
    console.log("en controlador - crearPermisos");
    try {
        const result = await AuthService.registrarListaPermisos(permissionsSeed);
        res.json(result);
    } catch (err) {
        console.log("Error al crear permisos:", err);
        res.status(400).json({error: err.message});
    }
} 

export const obtenerTodosLosPermisosController = async (req, res) => {
    console.log("en controlador - obtenerTodosLosPermisosController");
    try {
        const result = await AuthService.obtenerTodosLosPermisos();
        const permisosFormateados = renderizarPermisos(result);
        res.status(200).json(permisosFormateados);
    } catch (err) {
        console.log("Error al buscar permisos:", err);
        res.status(400).json({error: err.message});
    }
} 