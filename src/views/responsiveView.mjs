/**
 * Artist
 */

export const renderizarArtista = (artista) =>{
    //console.log("En views - renderizarArtista");
    //console.log("Datos previos:", artista);

    return {
        id: artista._id,
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

/**
 * genre
 */

export const renderizarGenero = (item) =>{

    return {
        name: item.name
    };
}

export const renderizarGeneros = (items) => {
    return items.map(item => renderizarGenero(item));
}

/**
 * Song
 */

export const renderizarCancion = (item) =>{

    const {title, durationSeconds, artists, language, releaseYear, coverUrl} = item;

    return {
        title,
        duration: durationSeconds,
        artists,
        language,
        releaseYear,
        coverUrl
    };
}

export const renderizarCanciones = (items) => {
    return items.map(item => renderizarCancion(item));
}

/**
 * Album
 */

export const renderizarAlbum = (item) =>{

    const {title, totalTracks, releaseYear, songs, artists, language, coverUrl} = item;

    return {
        title,
        totalTracks,
        releaseYear,
        songs,
        artists,
        language,
        coverUrl
    };
}

export const renderizarAlbumes = (items) => {
    return items.map(item => renderizarAlbum(item));
}