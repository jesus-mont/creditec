'use strict'

const mongoose= require('mongoose')
const Schema = mongoose.Schema
const bcrypt =require('bcrypt-nodejs')
const UserSchema= new Schema({
    Username:{type: String, unique:true, lowercase:true },
    password:{type:String,select:false},
    singUpDate: {type:Date , default:Date.now()},
    lastLogin: Date
})

UserSchema.pre('save',(next)=>{
    let user=this
    //if(!user.isModified('password'))return next()
        
    bcrypt.genSalt(10,(err,salt)=> {
        if(err)return next()

        bcrypt.hash(user.password, salt, null, (err,hash)=>{
            if(err)return next(err)

            user.password=hash
            next()
        })
    })
})
module.exports = mongoose.model('User', UserSchema)