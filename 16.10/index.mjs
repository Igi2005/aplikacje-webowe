import express from 'express'
import {readFile} from 'fs/promises'
const app = express()
const port = 3000

app.get('/',(req,res)=> {
    res.sendFile(`${__dirname}/index.html`)
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})