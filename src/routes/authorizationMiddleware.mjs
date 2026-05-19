import User from "../models/User.mjs";

export const hasPermission = (requiredPermission) => {
    return async (req, res, next) => {
        try {
            if(!req.user) {
                return res.status(401).json({message: 'No autenticado'});
            }
            //obtener usuario con rol y permisos
            const user = await User.findById(req.user.id).populate({
                path: 'role',
                populate: { path: 'permissions'}
            });

            const hasPermission = user.role.permissions.some(permission => permission.name === requiredPermission);

            if(!hasPermission){
                return res.status(403).json({message: 'No tienes permiso para realizar esta acción'});
            }

            next();
        } catch (err) {
            next(err);
        }
    }
}