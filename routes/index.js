'use strict'

const express = require('express')
const api = express.Router()
const CreditosContoller=require('../controllers/creditos')
const userControl =require('../controllers/user')
const auth =require('../middlewares/auth')
api.get('/creditos', CreditosContoller.getCreditos )
api.get('/creditos/:creditoId', CreditosContoller.getCredito)
api.post('/creditos', CreditosContoller.postCredito)
api.post('/signup',userControl.singUp)
api.post('/signin',userControl.singIn)
api.put('/creditos/:creditoId', CreditosContoller.putCredito)
api.delete('/creditos/:creditoId',CreditosContoller.deleteCredito)
api.get('/private', auth,(req, res)=>{
    res.status(200).send({message: 'tienes acceso'})
})


module.exports = api