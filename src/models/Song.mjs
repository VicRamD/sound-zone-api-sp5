import mongoose from "mongoose";

//Esquema song
const songSchema = new mongoose.Schema({
    title : {type: String, required: true, minlength: [3, 'El nombre debe tener al menos 3 caracteres'], maxlength: [60, 'El nombre no puede exceder 60 caracteres']},
    durationSeconds : Number,
    lyrics: String,
    artists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
    language: {type: String, maxlength: [30, 'El lenguaje no puede exceder 30 caracteres']},
    releaseYear: {type: Date},
    coverUrl: String,
    class: String,
    createdAt: {type: Date, default: Date.now}
});

//Modelo pais                Nombre   esquema    colección
const song = mongoose.model('Song', songSchema, 'Grupo-20');
export default song;