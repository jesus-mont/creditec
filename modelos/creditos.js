
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const creditoSchema= Schema({
    numControl: Number,
    CreditoPor: { type: String, enum:['Soccer', 'futbol rapido', 'danza', 'Ponencias', 'semana academica', 'basquetball'] },
    cantidad: Number,
    autorizacion: String
})

module.exports= mongoose.model('credito', creditoSchema)