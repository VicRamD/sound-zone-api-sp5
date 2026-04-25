# Trabajo Final Sprint 5

## Objetivos:

* Hacer un repaso de todos los temas vistos en el modulo.
* Fijar los conocimientos necesarios para poder desarrollar un servidor en NodeJS (con arquitectura MVC con capas).
* Desarrollar un sitio web.
* Consumir datos desde una API externa.
* Almacernar datos en una base de datos MongoDB.
* Manejar peticiones a un servidor (get, post, put y delete).
* Crear vistas para la interfaz web.
* Realizar validaciones de datos enviados por un formulario

## Tecnologías utilizadas:

* NodeJS
* Express
* EJS
* CSS

## Instrucciones para instalar:

Para ejecutarse el proyecto necesita tener instalado NodeJS, y además instalar los siguientes módulos con el comando npm install:

* express (idem versión 5.2.1)
* express-validator (el proyecto fue desarrollado con la versión 7.3.1)
* mongoose (idem versión 9.0.1)
* ejs (idem versión 3.1.10)
* express-ejs-layouts (idem versión 2.5.1)
* method-override (idem versión 3.0.0)

## Pasos de ejecución:

Ejecutar cualquiera de los siguientes comandos:
`node src/app.mjs` o `npm test`

Tras eso el serivdor escuchará en el puerto 3000

* Ingresando en http://localhost:3000/ verá la landing page.
* Desde ahí con el navbar puede moverse en el sitio.
* Cuando apenas comienza puede cargar datos en su base de datos con la ruta http://localhost:3000/externa/datos (no accesible desde el navbar), en dicho endpoint se consume la api externa "Restcountries"
* El dashborad (http://localhost:3000/api/paises/) muestra todos los países registrados y permite editarlos y/o eliminarlos
* El formulario para registrar un nuevo país se encuentra en http://localhost:3000/api/paises/agregar