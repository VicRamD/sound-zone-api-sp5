import {validationResult} from 'express-validator';

export const handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        return res.status(422).json({
            success: false,
            errors: errors.array().map(err => ({
                field: err.path,
                message: err.msg
            }))
        });
    }

    next();
};

export const controlDeErroresCreación = (req, res, next) => {
    console.log("en erroresHandler - controlDeErroresCreación");
    /* resultados de validaciones */
    const errors = validationResult(req);
    //console.log(errors);
    if(!errors.isEmpty()){
        let camposErroneos = errors.array().map(error => error.path);
        let mensajesDeError = errors.array().map(error => error.msg);
        /*let errores = {
            warning: 'Se detectaron errores en los valores ingresados',
            errors: errors.array().map(error => {
                return {
                    field: error.path,
                    message: error.msg
                }
            })
        }*/
        //console.log(errores.errors)
        console.log(req.body);
        res.render('addPais', {titulo: 'Nuevo País', camposErroneos, mensajesDeError, valoresRetornados: req.body});
        //return res.status(400).json(errores);
    } else {
        next();
    }

    /* ------------------ */
}


export const controlDeErroresEdición = (req, res, next) => {
    console.log("en erroresHandler - controlDeErroresEdición");
    /* resultados de validaciones */
    const errors = validationResult(req);
    //console.log(errors);
    if(!errors.isEmpty()){
        let camposErroneos = errors.array().map(error => error.path);
        let mensajesDeError = errors.array().map(error => error.msg);
        
        console.log(req.body);
        res.render('editPais', {valoresRetornados: req.body, titulo: 'Editar País', camposErroneos, mensajesDeError});
        //return res.status(400).json(errores);
    } else {
        next();
    }

    /* ------------------ */

}