/**
 * -----------------------------------------
 * -----------------------------------------
 */

export const renderizarArtista = (artista) =>{
    //console.log("En views - renderizarArtista");
    //console.log("Datos previos:", artista);

    return {
        name: artista.name,
        country: artista.imagen,
        formedYear: artista.formedYear,
        isActive: artista.isActive,
        image: artista.imageUrl,
    };
}

export const renderizarArtistas = (artistas) => {
    return artistas.map(artista => renderizarArtista(artista));
}