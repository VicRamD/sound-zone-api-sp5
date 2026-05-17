import AuthService from "../services/authService.mjs";

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

export const crearPermisos = async (req, res) => {
    console.log("en controlador - crearPermisos");
    try {
        const {email, password} = req.body;
        const result = await AuthService.login(email, password);
        res.json(result);
    } catch (err) {
        console.log("Error en login:", err);
        res.status(400).json({error: err.message});
    }
} 
