const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/',(req,res)=> {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/kontakt',(req,res) => {
    res.sendFile(`${__dirname}/form.html`)
})

app.post('/kontakt',(req,res)=>{
    console.log(res.body)
})

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})