import mongoose from "mongoose";

//Esquema pais
const recetaSchema = new mongoose.Schema({
    nombre: {type: String, minlength: [3, 'Nombre común debe tener al menos 3 caracteres'], maxlength: [90, 'Nombre común no puede exceder 90 caracteres']},
    imagen: {type: String},
    regiones: [String],
    tiposPlato: [String],
    resumen: String,
    clase: String,
    createdAt: {type: Date, default: Date.now}
});

//Modelo pais                Nombre   esquema      colección
const receta = mongoose.model('Receta', recetaSchema, 'Grupo-20');
export default receta;