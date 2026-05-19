import mongoose from "mongoose";

//Esquema user
const userSchema = new mongoose.Schema({
    username : {type: String, required: true, unique: true},
    email : {type: String, required: true, unique: true},
    password : {type: String, required: true},
    class: String,
    role : {type: mongoose.Schema.Types.ObjectId, ref:'Role' },
    createdAt: {type: Date, default: Date.now}
}, {timestamps: true});

//Modelo user                Nombre   esquema    colección
const user = mongoose.model('User', userSchema, 'Grupo-20');
export default user;

//role : {type: String, enum: ['user', 'admin'], default: 'user'},