import User from "../models/User.mjs"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


class AuthService {

    //Método para registrar un nuevo usuario
    async register(userData) {
        //verificando si ya existe un usuario con el mail o username
        const existingUser = await User.findOne({
            $or: [
                {email: userData.email},
                {username: userData.username}
            ]
        });

        //si existe lanzamos un error
        if(existingUser){
            throw new Error('Usuario o email ya existen');
        }

        //Encriptamos la contraseña antes de crear al usuario usando bcrypt
        const hashedPassword = await bcrypt.hash(userData.password,10);

        //creamos una una nueva instancia de User
        const user = new User({
            ...userData,
            password: hashedPassword
        });

        //guardamos al usuario en la BD
        await user.save();

        //convertimos el objeto mongoose a un objeto plano
        const userResponse = user.toObject();
        //eliminamos la contraseña por seguridad
        delete userResponse.password;

        //generamos un token jwt para el usuario
        const token = this.generateToken(user);
        return {user: userResponse, token}
    }

    //método para generar tokens
    generateToken(user){
        //creamos un id que incluye el id y el rol del usuario
        return jwt.sign(
            {
                id: user.id
            },

            //usamos la clave secreta del .env
            process.env.JWT_SECRET,
            //el token expira en 24hs
            {expiresIn: '24h'}
        )
    }
}

export default new AuthService();