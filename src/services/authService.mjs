import User from "../models/User.mjs"
import Permission from "../models/Permission.mjs";
import Role from "../models/Role.mjs";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';
import permission from "../models/Permission.mjs";


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

        //Buscamos el rol por defecto
        const defaultRole = await Role.findOne({name: 'user'}).populate('permissions', 'name');

        if(!defaultRole){
            throw new Error('Rol por defecto no encontrado');
        }

        //creamos una una nueva instancia de User
        const user = new User({
            ...userData,
            password: hashedPassword,
            role: defaultRole._id,
        });

        //guardamos al usuario en la BD
        await user.save();

        //convertimos el objeto mongoose a un objeto plano
        const userResponse = user.toObject();
        //eliminamos la contraseña por seguridad
        delete userResponse.password;

        //generamos un token jwt para el usuario
        const token = this.generateToken(user, defaultRole);
        return {user: userResponse, token}
    }


    //método para iniciar sesión
    async login(email, password){
        console.log("en service - login");
        //Buscamos el usuario por email
        const user = await User.findOne({email, class: "USER"}).populate({
            path: 'role',
            select: 'name description', 
            populate: {
                path: 'permissions',
                select: 'name'          
            }
        });
        if(!user){
           throw new Error('Usuario no encontrado');
        }

        //verificamos si la contraseña es correcta
        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword){
            throw new Error('Contraseña incorrecta');
        }

        //convertimos el usuario a objeto plano y prescindimos de la contraseña
        const userResponse = user.toObject();
        delete userResponse.password;

        //generamos un nuevo token y retornamos la respuesta
        const token = this.generateToken(user, user.role);
        return {user: userResponse, token};
    }

    //método para generar tokens
    generateToken(user, role){
        //creamos un id que incluye el id y el rol del usuario
        return jwt.sign(
            {
                id: user.id,
                role: role._id,
                
            },
            //permissions: role.permissions.map(p => p.name)

            //usamos la clave secreta del .env
            process.env.JWT_SECRET,
            //el token expira en 24hs
            {expiresIn: '24h'}
        )
    }

    //permisos
    async obtenerTodosLosPermisos(){
            console.log("En service - obtenerTodosLosPermisos");
            return await Permission.find({class: "PERMISSION"}); 
    }

    async registrarListaPermisos(listaDePermisos){
        console.log("En service - registrarListaPermisos");
        const permisos = await Permission.create(listaDePermisos);
        return permisos;
    }

    //roles
    async obtenerTodosLosRoles(){
            console.log("En service - obtenerTodosLosRoles");
            return await Role.find({class: "ROLE"}).populate('permissions', 'name'); 
    }

    async registrarListaRoles(lista){
        console.log("En service - registrarListaRoles");
        const roles = await Role.create(lista);
        return roles;
    }
}

export default new AuthService();