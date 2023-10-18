const express = require('express')

const app = express()
const port = 3000

app.use(express.static('contact'));

app.get('/',(req,res)=> {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/kontakt',(req,res)=>{
    res.sendFile(`${__dirname}/form.html`)
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})


