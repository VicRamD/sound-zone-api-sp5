class IRepository {
    obtenerArtistaPorId(id) {
        throw new Error("Método 'obtenerArtistaPorId()' no implementado");
    }
    obtenerTodosLosArtistas() {
        throw new Error("Método 'obtenerTodosLosArtistas()' no implementado");
    }

    //DRegistros que vienen de la API
    registrarArtistasAPI(listaDeArtistas){
        throw new Error("Método 'registrarArtistasAPI()' no implementado");
    }

    crearNuevoArtista(artistData){
        throw new Error("Método 'crearNuevoArtista()' no implementado");
    }

    actualizarArtista(id, artistData){
        throw new Error("Método 'actualizarArtista()' no implementado");
    }

    eliminarArtistaPorID(id){
        throw new Error("Método 'eliminarArtistaPorID()' no implementado");
    }
}

export default IRepository;