import mongoose from "mongoose";

//Esquema pais
const paisSchema = new mongoose.Schema({
    nombreComun: {type: String, minlength: [3, 'Nombre común debe tener al menos 3 caracteres'], maxlength: [90, 'Nombre común no puede exceder 90 caracteres']},
    nombreOficial: {type: String, required: true, minlength: [3, 'Nombre oficial debe tener al menos 3 caracteres'], maxlength: [90, 'Nombre oficial no puede exceder 90 caracteres']},
    capital: {type: String, required: true, minlength: [3, 'Capital debe tener al menos 3 caracteres'], maxlength: [90, 'Capital no puede exceder 90 caracteres']},
    fronteras: [String],
    area: {type: Number, min: [0, 'El área debe ser un número positivo']},
    poblacion: { type: Number, min: [0, 'La población debe ser un entero positivo'],
        validate: {
            validator: Number.isInteger,
            message: 'La población debe ser un entero positivo'
        }
    },
    timezones: [String],
    creador: String,
    //creador: {type: String, default: "RAMIREZ DIAZ VICTOR FRANCISCO"},
    createdAt: {type: Date, default: Date.now}
});

//Modelo pais                Nombre   esquema    colección
const pais = mongoose.model('Pais', paisSchema, 'Grupo-20');
export default pais;