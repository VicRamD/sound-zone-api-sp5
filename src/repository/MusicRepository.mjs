//Importar los modelos
import Artist from '../models/Artist.mjs';
import Genre from '../models/Genre.mjs';
import Song from '../models/Song.mjs';
import Album from '../models/Album.mjs';
//Importar abstracción de los metodos CRUD
import IRepository from './IRepository.mjs';
import genre from '../models/Genre.mjs';

//Clase MusicRepository que hereda de IRepository
class MusicRepository extends IRepository {

    /**
     * Artists
     */
    async obtenerArtistaPorId(id){
        //devuelve un artista con el id enviado
        return await Artist.findById(id);
    } 

    async obtenerTodosLosArtistas(){
        console.log("En repository - obtenerTodosLosArtistas");
        return await Artist.find({class: "ARTIST"}); 
    }


    async registrarArtistasAPI(listaDeArtistas){
        console.log("En repository - registrarArtistasAPI");
        const artistas = await Artist.create(listaDeArtistas);
        return artistas;
    }

    async crearNuevoArtista(artistData) {
        console.log("En repository - crearNuevoArtista");
        return await Artist.create(artistData);
    }

    async actualizarArtista(id, artistData) {
        console.log("En repository - actualizarArtista");
        //se guarda el resultado para saber si se actualizó algún artista
        const resultado = await Artist.updateOne({_id: id}, {
            $set: artistData
        });

        if(resultado.matchedCount === 0) {
            console.log("No se encontró un artista con el id enviado");
        } 
        //recupera el artista actualizado
        return await Artist.findById(id);
    }

    async eliminarArtistaPorID(id){
        console.log("En repository - eliminarArtistaPorID");
        return await Artist.findByIdAndDelete(id);
    }

    /**
     * Genres
     */

     async obtenerGeneroPorId(id){
        //devuelve un artista con el id enviado
        return await Genre.findById(id);
    } 

    async obtenerTodosLosGeneros(){
        console.log("En repository - obtenerTodosLosGeneros");
        return await Genre.find({class: "GENRE"}); 
    }

    async registrarGenerosAPI(list){
        console.log("En repository - registrarGenerosAPI");
        const lista = await Genre.create(list);
        return lista;
    }

    async crearNuevoGenero(data) {
        console.log("En repository - crearNuevoGenero");
        return await Genre.create(data);
    }

    async actualizarGenero(id, data) {
        console.log("En repository - actualizarGenero");
        //se guarda el resultado para saber si se actualizó algún registro
        const resultado = await Genre.updateOne({_id: id}, {
            $set: data
        });

        if(resultado.matchedCount === 0) {
            console.log("No se encontró un genero con el id enviado");
        } 
        //recupera el artista actualizado
        return await Genre.findById(id);
    }

    async eliminarGeneroPorID(id){
        console.log("En repository - eliminarGeneroPorID");
        return await Genre.findByIdAndDelete(id);
    }

    /**
     * Song
     */

     async obtenerSongPorId(id){
        //devuelve una canción con el id enviado
        return await Song.findById(id).populate('artists', 'name');
    } 

    async obtenerTodasLasCanciones(){
        console.log("En repository - obtenerTodosLasCanciones");
        return await Song.find({class: "SONG"}); 
    }

    async registrarCancionesAPI(list){
        console.log("En repository - registrarCancionesAPI");
        const lista = await Song.create(list);
        return lista;
    }

    async crearNuevaCancion(data) {
        console.log("En repository - crearNuevaCancion");
        return await Song.create(data);
    }

    async actualizarCancion(id, data) {
        console.log("En repository - actualizarCancion");
        //se guarda el resultado para saber si se actualizó algún registro
        const resultado = await Song.updateOne({_id: id}, {
            $set: data
        });

        if(resultado.matchedCount === 0) {
            console.log("No se encontró un genero con el id enviado");
        } 
        //recupera el artista actualizado
        return await Song.findById(id);
    }

    async eliminarCancionPorID(id){
        console.log("En repository - eliminarCancionPorID");
        return await Song.findByIdAndDelete(id);
    }

    /**
     * Album
     */

     async obtenerAlbumPorId(id){
        //devuelve un album con el id enviado
        return await Album.findById(id).populate('songs', 'title').populate('artists', 'name');;
    } 

    async obtenerTodosLosAlbumes(){
        console.log("En repository - obtenerTodosLosAlbumes");
        return await Album.find({class: "ALBUM"}); 
    }

    async registrarAlbumesAPI(list){
        console.log("En repository - registrarAlbumesAPI");
        const lista = await Album.create(list);
        return lista;
    }

    async crearNuevoAlbum(data) {
        console.log("En repository - crearNuevoAlbum");
        return await Album.create(data);
    }

    async actualizarAlbum(id, data) {
        console.log("En repository - actualizarAlbum");
        //se guarda el resultado para saber si se actualizó algún registro
        const resultado = await Album.updateOne({_id: id}, {
            $set: data
        });

        if(resultado.matchedCount === 0) {
            console.log("No se encontró un genero con el id enviado");
        } 
        return await Album.findById(id);
    }

    async eliminarAlbumPorID(id){
        console.log("En repository - eliminarAlbumPorID");
        return await Album.findByIdAndDelete(id);
    }
}

export default new MusicRepository();