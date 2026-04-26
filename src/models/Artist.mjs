import mongoose from "mongoose";

//Esquema artist
const artistSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: [3, 'El nombre debe tener al menos 3 caracteres'], maxlength: [60, 'El nombre no puede exceder 60 caracteres']},
    biography: String,
    country: {type: String, minlength: [3, 'El país debe tener al menos 3 caracteres'], maxlength: [30, 'El país no puede exceder 30 caracteres']},
    formedYear: {type: Date, validate: {
            validator: function(value) {
                // 'value' es la fecha que el usuario intenta guardar
                // Retorna true si no supera al día actual
                return value <= new Date();
            },
            message: 'La fecha de formación no puede superar el día actual'
        }},
    isActive: Boolean,
    imageUrl: String,
    class: String,
    createdAt: {type: Date, default: Date.now}
});

//Modelo pais                   Nombre   esquema    colección
const artist = mongoose.model('Artist', artistSchema, 'Grupo-20');
export default artist;