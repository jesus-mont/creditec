'use strict'


const mongoose = require('mongoose')
const User =require('../modelos/user')
const service =require('../services')

function singUp(req, res){
    const user= new User({
        UserName: req.body.UserName,
        password: req.body.password

    })
    user.save((err)=> {
        if(err) res.status(500).send({message:`Error al crear el usuario ${err}`})

        return res.status(200).send({token: service .createToken(user)})

    })
}
function singIn(req,res){
    User.find({UserName:req.body.UserName}, (err,user)=>{
        if(err) return res.status(500).send({message: err})
        if(!user) return res.status(404).send({message: 'no existe el usuario'})

        req.user=user
        res.status(200).send({
            message:'te has logueado correctamente',
            token:service .createToken(user)
        })
    })

}

module.exports={
    singIn,
    singUp
}