import mongoose from "mongoose";

//Esquema album
const albumSchema = new mongoose.Schema({
    title : {type: String, required: true, minlength: [3, 'El nombre debe tener al menos 3 caracteres'], maxlength: [60, 'El nombre no puede exceder 60 caracteres']},
    totalTracks : Number,
    releaseYear: Number,
    releaseDate: {type: Date},
    songs: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Song' }],
    artists: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Artist' }],
    language: {type: String, maxlength: [30, 'El lenguaje no puede exceder 30 caracteres']},
    coverUrl: String,
    class: String,
    createdAt: {type: Date, default: Date.now}
});

//Modelo pais                Nombre   esquema    colección
const album = mongoose.model('Album', albumSchema, 'Grupo-20');
export default album;