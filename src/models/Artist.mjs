import mongoose from "mongoose";

//Esquema artist
const artistSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [3, 'El nombre debe tener al menos 3 caracteres'], maxlength: [60, 'El nombre no puede exceder 60 caracteres']},
    biography: String,
    country: {type: String, minlength: [3, 'El país debe tener al menos 3 caracteres'], maxlength: [30, 'El país no puede exceder 30 caracteres']},
    formedYear: { 
        type: Number,
        min: [1800, 'El año no puede ser menor a 1800'],
        max: [new Date().getFullYear(), 'El año no puede superar el año actual']
    },
    isActive: Boolean,
    imageUrl: String,
    class: String,
    createdAt: {type: Date, default: Date.now}
});

//Modelo pais                   Nombre   esquema    colección
const artist = mongoose.model('Artist', artistSchema, 'Grupo-20');
export default artist;