const {response} = require('express');
const Evento = require('../models/Evento')

const getEventos = async (req,res=response) => {

    const eventos = await Evento.find()
                                .populate('user','name');

    res.json({
        ok: true,
        eventos
    })

}

const crearEventos = async (req,res) => {

    const evento = new Evento(req.body);

    try {

        evento.user =req.uid;
        
       const eventoGuardado = await evento.save();

       res.json({
           ok: true,
           evento: eventoGuardado
       })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok: false,
            msg: 'Hable con el administrador'
        });
    }

    // res.json({
    //     ok: true,
    //     msg: 'crearEventos'
    // })

}

const actualizarEvento = async(req,res = response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoId);

        if(!evento) {
            res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de editar este nuevo evento'
            })
        }

        const nuevoEvento = {
            ...req.body,
            user: uid
        }

        const eventoActualizado = await Evento.findByIdAndUpdate(eventoId,nuevoEvento,{new:true});

        res.json({
            ok: true,
            evento: eventoActualizado
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Habla con el administrador'
        });
    }

    

    // res.json({
    //     ok: true,
    //     eventoId
    // })

}

const eliminarEvento = async (req,res=response) => {

    const eventoId = req.params.id;
    const uid = req.uid;

    try {

        const evento = await Evento.findById(eventoId);

        if(!evento) {
            res.status(404).json({
                ok: false,
                msg: 'Evento no existe por ese id'
            })
        }

        if(evento.user.toString() !== uid){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene privilegio de eliminar este nuevo evento'
            })
        }

        

        const eventoEliminado = await Evento.findByIdAndDelete(eventoId);

        res.json({
            ok: true,
            evento: eventoEliminado
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Habla con el administrador'
        });
    }

}

module.exports = {
    getEventos,
    crearEventos,
    actualizarEvento,
    eliminarEvento
}