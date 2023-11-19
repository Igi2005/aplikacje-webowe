const express = require('express')
const router = express.Router()
const {MongoClient, MongoKerberosError} = require("mongodb")
const url = "mongodb+srv://user:haslo@cluster0.3vwu7fj.mongodb.net/?retryWrites=true&w=majority"
/*router.get('/students',async(req,res) =>{
        res.json(students);
})

router.get('/subjects',async(req,res) =>{
    res.json(sub)
    
})
router.get('/students/:id',async(req,res)=> {
    let id = Number(req.params.id)
})

router.get('/subjects/:id',async(req,res)=>{
    let id = Number(req.params.id)
})*/

router.get('/messages',async(req,res) =>{
    try {
        const db =  await MongoClient.connect(url)
        const dbo = db.db("baza_node")
        console.log("wszystko dziala")
        const result = await dbo.collection("contact").find().toArray()
        res.send(result)
    }
    catch(er){
        console.log(er)
    }
})
module.exports=router
