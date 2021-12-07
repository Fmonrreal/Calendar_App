/*
    Event Routes
    /api/events
*/
const {Router} = require('express');
const {check} = require('express-validator');

const {isDate} = require('../helpers/isDate');
const {validarCampos} = require('../middlewares/validar-campos');
const {validarJWT} = require('../middlewares/validar-jwt');
const {getEventos,crearEventos,actualizarEvento,eliminarEvento} = require('../controllers/events');

const router = Router();

//Todas tienes que pasar por la validacion del JWT
router.use(validarJWT);

//Obtener eventos
router.get('/',getEventos);

//Crear eventos
router.post(
    '/',
    [
        check('title','El titulo es obligatorio').not().isEmpty(),
        check('start','Fecha de inicio es obligatoria').custom(isDate),
        check('end','Fecha de finalizacion es obligatoria').custom(isDate),
        validarCampos
    ],
    crearEventos
);

//Actualizar Evento
router.put('/:id',actualizarEvento);

//Borrar Evento
router.delete('/:id',eliminarEvento);

module.exports = router;


