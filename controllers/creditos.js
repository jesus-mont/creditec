'use strict'
const Credito = require('../modelos/creditos')

function getCredito(req, res){
    let creditoId = req.params.creditoId

    Credito.findById(creditoId, (err, credito) => {
        if (err) return res.status(500).sen({ message: `error al realizar la peticion: ${err}` })
        if (!credito) return res.status(404).send({ message: `el Credito no existe` })

        res.status(200).send({credito: credito})
    })
}

function getCreditos(req, res){
    Credito.find({}, (err, creditos) => {
        if (err) return res.status(500).sen({ message: `error al realizar la peticion: ${err}` })
        if (!creditos) return res.status(404).send({ message: `no existen Creditos` })

        res.send(200, { creditos: creditos })
    })
}

function postCredito(req, res){
    console.log('POST /api/creditos')
    console.log(req.body)

    let credito = new Credito()
    credito.numControl = req.body.numControl
    credito.CreditoPor = req.body.CreditoPor
    credito.cantidad = req.body.cantidad
    credito.autorizacion = req.body.autorizacion

    credito.save((err, creditoStored) => {
        if (err) res.status(500).send({message: `error al salvar credito: ${err}`})
    res.status(200).send({ creditoStored })
    })
}
function putCredito(id){
    let creditoId= req.params.creditoId
    let update= req.body
    
    Credito.findByIdAndUpdate(creditoId, update, (err,creditoUpdate)=>{
        if(err)res.status(500).send({message: `error al actualizar el credito ${err}`})
    
        res.status(200).send({message: creditoUpdate})
    })
}
function deleteCredito(id){
    let creditoId =req.params.creditoId
    Credito.findById(creditoId,(err, credito)=> {
        if(err)res.status(500).send({message: `error al eliminar credito ${err}`})
    
        credito.remove(err=> {
            if(err)res.status(500).send({message: `error al eliminar credito ${err}`},
        res.status(200).send({message: `el objeto se ha eliminado`}))
        })
    })
}
module.exports={
    getCredito,
    getCreditos,
    putCredito,
    postCredito,
    deleteCredito
}