window.addEventListener("load", ()=>{
    //Capturar botones
    const btnAgregarPaisFrontera = document.querySelector("#btnAgregarPaisFrontera");
    console.log(btnAgregarPaisFrontera);

    const btnAgregarTimezone = document.querySelector("#btnAgregarTimezone");
    console.log(btnAgregarTimezone);

     const agregarInputVector = (queryIdInputAgregar, queryIdDivContenedor, inputName, minLength, maxLength) => {
        console.log("en agregarInputVector");
        //captura de elementos
        const inputParaAgregar = document.querySelector(queryIdInputAgregar);
        console.log(inputParaAgregar);
        const contenedor = document.querySelector(queryIdDivContenedor);
        console.log(contenedor);

        //crear div contenedor del input y el boton para quitar
        const div = document.createElement('div');
        div.className += "inputAndBtnContainer";
        contenedor.appendChild(div);
        // -------------------

        //crear input del elemento agregado
        const input = document.createElement('input');
        input.type = 'text';
        input.name = inputName;
        input.value = inputParaAgregar.value;
        //minlength="3" maxlength="3"
        //input.required = true;
        input.minLength=3;
        input.maxLength=3;
        input.className += "inputVector";
        //input.readOnly = true;
        //console.log(input);
        div.appendChild(input);
        //console.log("div padre:", div);
        //---------------------
        inputParaAgregar.value = '';

        //crear botón quitar
        const btnQuitar = document.createElement('button');
        //console.log("BTN quitar: ", btnQuitar);
        btnQuitar.innerText = 'Quitar';
        btnQuitar.type = 'button';
        btnQuitar.className += "btnQuitar";
        
        div.appendChild(btnQuitar);

        //función para quitar poder
        btnQuitar.addEventListener('click', ()=>{
            //console.log("BTN quitar: ", btnQuitar);
            const padre = btnQuitar.parentElement;
            //console.log(padre);
            padre.remove();
        });
        //-------------------

        //revisar lista de inputs
        const vectorInputs = document.querySelectorAll(`input[name="${inputName}"]`);
        vectorInputs.forEach(input => {
            console.log(input.value);
        }); 
     };

     btnAgregarPaisFrontera.addEventListener('click', ()=>{
        agregarInputVector('#idPaisFrontera','#paisesFronteraContainer','paisesFrontera[]', 3, 3);
    });

    btnAgregarTimezone.addEventListener('click', ()=> {
        agregarInputVector('#idTimezone','#timezonesContainer','timezones[]', 3, 10);
    });
});