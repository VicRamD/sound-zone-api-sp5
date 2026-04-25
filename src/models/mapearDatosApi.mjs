export const mapearReceta = (receta) =>{
    console.log("En models - mapearReceta");
    console.log("Datos previos al mapeo:", receta);
    //console.log(receta[0].title); toma como si un registro fuera un arreglo
    //console.log(typeof receta);

    return {
        nombre: receta.title,
        imagen: receta.image,
        regiones: receta.cuisines,
        resumen: receta.summary,
        tiposPlato: receta.dishTypes,
        clase: "RECETA" 
    };
}

export const mapearRecetas = (recetas) => {
    return recetas.map(receta => mapearReceta(receta));
}