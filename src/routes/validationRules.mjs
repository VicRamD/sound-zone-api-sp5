import {body} from 'express-validator';

//Validaciones
export const artistValidation = [
    body('name')
        .trim().notEmpty().withMessage('El nombre es obligatorio').isLength({ min: 3, max: 60 }).withMessage('El nombre debe tener entre 3 y 60 caracteres'),

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
        .isInt({ min: 1800, max: new Date().getFullYear() })
        .withMessage('El año no puede superar el actual o ser menor a 1800')
        .toInt(),

];

export const songValidation = [
    body('title')
        .notEmpty().withMessage('El título es obligatorio')
        .isLength({ min: 3 }).withMessage('El título debe tener al menos 3 caracteres')
        .isLength({ max: 60 }).withMessage('El título no puede exceder 60 caracteres')
        .trim(),

    body('durationSeconds')
        .optional()
        .isInt({ min: 1 }).withMessage('La duración debe ser un número entero positivo'),

    body('lyrics')
        .optional()
        .isString().withMessage('La letra debe ser texto'),

    body('artists')
        .optional()
        .isArray().withMessage('artists debe ser un array')
        .custom((ids) => {
            const todosValidos = ids.every(id => mongoose.Types.ObjectId.isValid(id));
            if (!todosValidos) throw new Error('Uno o más IDs de artistas no son válidos');
            return true;
        }),

    body('language')
        .optional()
        .isLength({ max: 30 }).withMessage('El lenguaje no puede exceder 30 caracteres')
        .trim(),

    body('releaseYear')
        .optional()
        .isISO8601().withMessage('La fecha debe tener formato válido (ISO 8601)')
        .custom((value) => {
            if (new Date(value) > new Date()) {
                throw new Error('La fecha de lanzamiento no puede superar el día actual');
            }
            return true;
        }),

    body('class')
        .optional()
        .isString().withMessage('class debe ser texto'),
];


export const albumValidation = [
    body('title')
        .notEmpty().withMessage('El título es obligatorio')
        .isLength({ min: 3 }).withMessage('El título debe tener al menos 3 caracteres')
        .isLength({ max: 60 }).withMessage('El título no puede exceder 60 caracteres')
        .trim(),

    body('totalTracks')
        .optional()
        .isInt({ min: 1 }).withMessage('El total de tracks debe ser un número entero positivo'),

    body('releaseYear')
        .optional()
        .isInt({ min: 1900, max: new Date().getFullYear() })
        .withMessage(`El año debe estar entre 1900 y ${new Date().getFullYear()}`),

    body('releaseDate')
        .optional()
        .isISO8601().withMessage('La fecha debe tener formato válido (ISO 8601)')
        .custom((value) => {
            if (new Date(value) > new Date()) {
                throw new Error('La fecha de lanzamiento no puede superar el día actual');
            }
            return true;
        }),

    body('songs')
        .optional()
        .isArray().withMessage('songs debe ser un array')
        .custom((ids) => {
            const todosValidos = ids.every(id => mongoose.Types.ObjectId.isValid(id));
            if (!todosValidos) throw new Error('Uno o más IDs de canciones no son válidos');
            return true;
        }),

    body('artists')
        .optional()
        .isArray().withMessage('artists debe ser un array')
        .custom((ids) => {
            const todosValidos = ids.every(id => mongoose.Types.ObjectId.isValid(id));
            if (!todosValidos) throw new Error('Uno o más IDs de artistas no son válidos');
            return true;
        }),

    body('language')
        .optional()
        .isLength({ max: 30 }).withMessage('El lenguaje no puede exceder 30 caracteres')
        .trim(),

    body('class')
        .optional()
        .isString().withMessage('class debe ser texto'),
];

export const genreValidation = [
    body('name')
        .notEmpty().withMessage('El nombre es obligatorio')
        .isLength({ min: 3 }).withMessage('El nombre debe tener al menos 3 caracteres')
        .isLength({ max: 25 }).withMessage('El nombre no puede exceder 25 caracteres')
        .trim(),

    body('class')
        .optional()
        .isString().withMessage('class debe ser texto'),
];

/*************** */

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


