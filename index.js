'use strict'


const mongoose = require('mongoose')


const config=require('./config')

const app = require('./app')

mongoose.connect(config.db, (err, res) => {
    if (err) { return console.log(`error al conectar la Base de Datos: ${err}`) }
    console.log('Conexion a la Base de Datos establecida...')
    app.listen(config.port, () => {
        console.log(`Api REST corriendo en http://localhost:${config.port}`)
    })
})
