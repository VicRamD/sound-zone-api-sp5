window.addEventListener("load", ()=>{
    //Captura del formulario de eliminación
    const formDelete = document.querySelector("#formDelete");
    console.log(formDelete);

    //confirmación sobre envío de datos
    formDelete.addEventListener("submit", (event)=> {
        let confirmacion = window.confirm("¿Está seguro/a de que deseas eliminar el país?");
        console.log(confirmacion);
        if(!confirmacion){
            event.preventDefault();
        }
    })
});