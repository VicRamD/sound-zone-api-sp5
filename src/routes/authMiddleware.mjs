import jwt from "jsonwebtoken";

//Middleware para verificar el token de autenticación
export const authtenticateToken = (req, res, next) => {
    //obtenemos el header de autorización
    const authHeader = req.headers['authorization'];
    //extraemos el token del header (formato: "bearer <token>")
    const token = authHeader && authHeader.split(' ')[1];

    //Si no hay token retornamos un status error 401 (no autorizado)
    if(!token){
        return res.status(401).json({message: 'Token no proporcionado'});
    }

    try {
        //verificamos el token usando la clave secreta
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        //Guardamos la información del usuario decodificada en el objeto request
        req.user = decoded;
        next();
    } catch (error) {
        //Si el token es invalido devolvemos error 403 (prohibido)
        return res.status(403).json({message: 'Token invalido'});
    }
};