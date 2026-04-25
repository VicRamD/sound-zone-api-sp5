//Importar el modelo de superheroes
import Pais from '../models/Pais.mjs'; 
import Artist from '../models/Artist.mjs';
//Importar abstracción de los metodos CRUD
import IRepository from './IRepository.mjs';

//Clase MusicRepository que hereda de IRepository
class MusicRepository extends IRepository {
    async obtenerArtistaPorId(id){
        //devuelve un artista con el id enviado
        return await Artist.findById(id);
    } 

    async obtenerTodosLosArtistas(){
        console.log("En repository - obtenerTodosLosArtistas");
        return await Artist.find({clase: "ARTIST"}); 
    }

    /*
    async obtenerRecetasPorRegion(region){
        console.log("En repository - obtenerRecetasPorRegion");
        //console.log(region);
        //return await Receta.find({clase: "RECETA", regiones: region}); 
        let recetasRecuperadas;
         await Receta.find({clase: "RECETA", regiones: region})
        .limit(1).then(result => {
            console.log(result);
            recetasRecuperadas = result;

        }).catch(err => console.error(err));
        return recetasRecuperadas;
    } */

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
}

export default new MusicRepository();