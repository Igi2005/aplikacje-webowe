const express = require('express')
const test = require("./router.js")
const app = express()
const port = 3000

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=> {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/kontakt',(req,res) => {
    res.sendFile(`${__dirname}/form.html`)
})

app.post('/kontakt',(req,res)=>{
    console.log(req.body)
    res.redirect('/')
})

app.use('/api',test);

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})