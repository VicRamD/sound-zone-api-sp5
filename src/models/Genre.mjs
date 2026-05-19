import mongoose from "mongoose";

//Esquema genre
const genreSchema = new mongoose.Schema({
    name : {type: String, required: true, minlength: [3, 'El nombre debe tener al menos 3 caracteres'], maxlength: [25, 'El nombre no puede exceder 25 caracteres']},
    class: String,
    creator : {type: mongoose.Schema.Types.ObjectId, ref:'User' },
    createdAt: {type: Date, default: Date.now}
});

//Modelo genre                Nombre   esquema    colección
const genre = mongoose.model('Genre', genreSchema, 'Grupo-20');
export default genre;