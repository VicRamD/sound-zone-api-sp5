import mongoose from "mongoose";

//Esquema role
const roleSchema = new mongoose.Schema({
    name : {type: String, required: true, unique: true},
    description : {type: String, required: true},
    permissions: [
        { type: mongoose.Schema.Types.ObjectId, ref: 'Permission' }
    ],
    class: String,
    createdAt: {type: Date, default: Date.now}
});

//Modelo role               Nombre   esquema     colección
const role = mongoose.model('Role', roleSchema, 'Grupo-20');
export default role;