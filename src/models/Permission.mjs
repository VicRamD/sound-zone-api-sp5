import mongoose from "mongoose";

//Esquema user
const permissionSchema = new mongoose.Schema({
    name : {type: String, required: true, unique: true},
    description : {type: String, required: true},
    class: String,
    createdAt: {type: Date, default: Date.now}
});

//Modelo permission                  Nombre          esquema       colección
const permission = mongoose.model('Permission', permissionSchema, 'Grupo-20');
export default permission;