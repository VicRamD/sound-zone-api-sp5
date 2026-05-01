/**
 * Artist
 */

export const renderizarArtista = (artista) =>{
    //console.log("En views - renderizarArtista");
    //console.log("Datos previos:", artista);

    return {
        id: artista._id,
        name: artista.name,
        country: artista.country,
        formedYear: artista.formedYear,
        biography: artista.biography,
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
        id: item._id,
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

    const {_id:id, title, durationSeconds, artists, language, releaseYear, coverUrl} = item;

    return {
        id,
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

    const {_id: id, title, totalTracks, releaseYear, songs, artists, language, coverUrl} = item;

    return {
        id,
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