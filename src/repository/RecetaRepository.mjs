//Importar el modelo de superheroes
import Pais from '../models/Pais.mjs'; 
import Receta from '../models/Receta.mjs';
//Importar abstracción de los metodos CRUD
import IRepository from './IRepository.mjs';

//Clase PaisRepository que hereda de IRepository
class PaisRepository extends IRepository {
    async obtenerPaisPorId(id){
        //devuelve un superhéroe con el id enviado
        return await Pais.findById(id);
    }

    async obtenerTodosLosPaises(){
        console.log("En repository - obtenerTodosLosPaises");
        return await Pais.find({creador: "RAMIREZ DIAZ VICTOR FRANCISCO",
            capital: {$exists: true}
        }); 
        //exist pregunta si tiene el atributo capital, para que no devuelva registros de héroes
    }

    async obtenerRecetaPorId(id){
        //devuelve una receta con el id enviado
        return await Receta.findById(id);
    }

    async obtenerTodasLasRecetas(){
        console.log("En repository - obtenerTodasLasRecetas");
        return await Receta.find({clase: "RECETA"}); 
    }

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
    }

    async registrarRecetasAPI(listaDeRecetas){
        console.log("En repository - registrarRecetasAPI");
        const paises = await Receta.create(listaDeRecetas);
        return paises;
    }

    async crearNuevoPais(datosPais) {
        console.log("En repository - crearNuevoPais");
        return await Pais.create({
            nombreComun: datosPais.nombreComun,
            nombreOficial: datosPais.nombreOficial,
            capital: datosPais.capital,
            fronteras: datosPais.fronteras,
            area: datosPais.area,
            poblacion: datosPais.poblacion,
            timezones: datosPais.timezones,
            creador: datosPais.creador
        });
    }

    async actualizarPais(id, datosPais) {
        console.log("En repository - actualizarPais");
        //se guarda el resultado para saber si se actualizó algún super héroe
        const resultado = await Pais.updateOne({_id: id}, {
            $set: {
                nombreComun: datosPais.nombreComun,
                nombreOficial: datosPais.nombreOficial,
                capital: datosPais.capital,
                fronteras: datosPais.fronteras,
                area: datosPais.area,
                poblacion: datosPais.poblacion,
                timezones: datosPais.timezones
            }
        });

        if(resultado.matchedCount === 0) {
            console.log("No se encontró un superhéroe con el id enviado");
        } 
        //recupera el heroe actualizado
        return await Pais.findById(id);
    }

    async eliminarPaisPorID(id){
        console.log("En repository - eliminarPaisPorID");
        return await Pais.findByIdAndDelete(id);
    }
}

export default new PaisRepository();