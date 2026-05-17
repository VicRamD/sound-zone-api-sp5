import User from "../models/User.mjs"
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';


class AuthService {

    //Método para registrar un nuevo usuario
    async register(userData) {
        console.log("en service - register");
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


    //método para iniciar sesión
    async login(email, password){
        console.log("en service - login");
        //Buscamos el usuario por email
        const user = await User.findOne({email, class: "USER"});
        if(!user){
           throw new Error('Usuario no encontrado');
        }

        //verificamos si la contraseña es correcta
        const invalidPassword = await bcrypt.compare(password, user.password);
        if(!invalidPassword){
            throw new Error('Contraseña incorrecta');
        }

        //convertimos el usuario a objeto plano y prescindimos de la contraseña
        const userResponse = user.toObject();
        delete userResponse.password;

        //generamos un nuevo token y retornamos la respuesta
        const token = this.generateToken(user);
        return {user: userResponse, token};
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