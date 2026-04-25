import {body} from 'express-validator';

//Validaciones
export const artistValidation = [
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres')
        .isLength({ max: 60 }).withMessage('El nombre no puede exceder 60 caracteres')
        .trim(),

    body('biography')
        .optional()
        .isString().withMessage('La biografía debe ser texto'),

    body('country')
        .optional()
        .isLength({ min: 3 }).withMessage('El país debe tener al menos 3 caracteres')
        .isLength({ max: 30 }).withMessage('El país no puede exceder 30 caracteres')
        .trim(),

    body('formedYear')
        .optional()
        .isISO8601().withMessage('La fecha debe tener formato válido (ISO 8601)')
        .custom((value) => {
            if (new Date(value) > new Date()) {
                throw new Error('La fecha de formación no puede superar el día actual');
            }
            return true;
        }),

    body('isActive')
        .optional()
        .isBoolean().withMessage('isActive debe ser true o false'),

    body('imageUrl')
        .optional()
        .isURL().withMessage('La URL de la imagen no es válida'),
];




export const paisValidator = [body('nombreComunPais').notEmpty().withMessage('El nombre común del país debe tener entre 3 y 90 carácteres'),
    body('nombreComunPais').isString().trim().isLength({min: 3, max: 90}).withMessage('El nombre común del país debe tener entre 3 y 90 carácteres').escape(),
    body('nombreOficialPais').notEmpty().withMessage('El nombre oficial del país debe tener entre 3 y 90 carácteres'),
    body('nombreOficialPais').isString().trim().isLength({min: 3, max: 90}).withMessage('El nombre oficial del país debe tener entre 3 y 90 carácteres').escape(),
    body('capitalPais').notEmpty().withMessage('la capital del país debe tener entre 3 y 90 carácteres').escape(),
    body('capitalPais').isString().trim().isLength({min: 3, max: 90}).withMessage('la capital del país debe tener entre 3 y 90 carácteres').escape(),
    body('areaPais').notEmpty().withMessage('El área debe ser un número no negativo'),
    body('areaPais').isNumeric().trim()
    .custom( value => {
        //console.log('en custom area');
        return parseInt(value) >= 0;
    })
    .withMessage('El área debe ser un número no negativo').escape(),
    body('poblacionPais').notEmpty().withMessage('La población debe ser un número entero no negativo'),
    body('poblacionPais').isNumeric().isInt({min: 0}).trim().withMessage('La población debe ser un número entero no negativo').escape(),
    /*.custom( value => {
        //console.log('en custom area');
        return parseInt(value) >= 0;
    }) */
    body('paisesFrontera').notEmpty().withMessage('Debe agregar por lo menos un país frontera').escape(),
    body('paisesFrontera').exists({checkFalsy: true}).isArray({min: 1}) //verifica que sea un array de por lo menos un elemento 
    .withMessage('Debe agregar por lo menos un país frontera').escape(),
    //elementos del array poderes
    body('paisesFrontera.*').notEmpty().withMessage('Cada país fronterizo debe tener 3 carácteres que sean letras mayúsculas'),
    body('paisesFrontera.*').trim().isString().isUppercase().withMessage('Cada país fronterizo debe tener 3 carácteres que sean letras mayúsculas'),
    body('paisesFrontera.*').isLength({min: 3, max: 3}).withMessage('Cada país fronterizo debe tener 3 carácteres que sean letras mayúsculas').escape()
]