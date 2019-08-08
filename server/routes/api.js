const express= require('express')
const router = express.Router()
const User = require('../models/user')
const mongoose = require('mongoose')
const db = 'mongodb://localhost:27017/authApp';
 //const db ="mongodb+srv://chirag:Chirag%40123@mndb1-djray.mongodb.net/test?retryWrites=&w=majority"
 //const db ="mongodb+srv://chirag:Chirag%40123@cluster0-zpghe.mongodb.net/test?retryWrites=true&w=majority"

 mongoose.connect(db, {useNewUrlParser:true},err => {
     if(err){
         console.error('Error!' + err)

    }
     else{
         console.log('Connected to mongodb')
     }
 }) 
router.get('/', (req,res) => {
        res.send('From api route')
    })

router.post('/register',(req,res) => {
    let userData = req.body
    let user = new User(userData)
    user.save((err,registeredUser) => {
        if(err){
            console.log(err)
        } else 
        {
            res.status(200).send(registeredUser)
        }
    })
})


    router.post('/login',(req,res) => {
        let userData =req.body 
        User.findOne({email: userData.email},(error,user) => {
            if(error){
                console.log(error)
            } else{
                if(!user){
                    res.status(401).send('Invalid email')
                } else
                if (user.password !== userData.password) 
                {
                    res.status(401).send('Invalid Password')
                } else {
                    delete user.password;
                    res.status(200).send(user)
                }
            }
        })
    })


    router.get('/events',(req,res) => {
        let events =
        [
            {
                "_id":"1",
                "name":"Auto expo",
                "description":"summer",
                "date":"10-03-2019"
            },
            {
                "_id":"1",
                "name":"Auto expo",
                "description":"winter",
                "date":"25-12-2019"
            },
            {
                "_id":"1",
                "name":"Auto expo",
                "description":"spring",
                "date":"15-05-2019"
            },
            {
                "_id":"1",
                "name":"Auto expo",
                "description":"monsoon",
                "date":"04-08-2019"
            }
        ]
        res.json(events)
    })

    router.get('/special',(req,res) => {
        let events =
        [
            {
                "_id":"1",
                "name":"Auto expo",
                "description":"summer",
                "date":"10-03-2019"
            },
            {
                "_id":"1",
                "name":"Auto expo",
                "description":"winter",
                "date":"25-12-2019"
            },
            {
                "_id":"1",
                "name":"Auto expo",
                "description":"spring",
                "date":"15-05-2019"
            },
            {
                "_id":"1",
                "name":"Auto expo",
                "description":"monsoon",
                "date":"04-08-2019"
            }
        ]
        res.json(events)
    })


    module.exports = router   