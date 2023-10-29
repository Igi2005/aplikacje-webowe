const express = require('express')
const app = express()
const port = 3000
const router = express.Router()

//import site from "./file.json" assert { type: 'json' };; 

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const api = [
    {id: 1, name: 'Adam', surname: 'Koks', email: 'cos@wp.pl'},
    {id: 2, name: 'Bambi', surname: 'Szef', email: 'bambi@zsk.pl'},
    {id: 3, name: 'Maciek', surname: 'Tak', email: 'nie ma'},
    {id: 4, name: 'Jakub', surname: 'Nie', email: 'brak'},
    {id: 5, name: 'Hugo', surname: 'Na miejscu', email: 'brak'},
    {id: 6, name: 'Aleks', surname: 'Aleks', email: 'brak'},
    {id: 7, name: 'Adamos', surname: 'Ramos', email: 'real@gmail.com'},
    {id: 8, name: 'Darwin', surname: 'Nunez GOAT', email: 'darwin.GOAT@wp.pl'},
    {id: 9, name: 'Leo', surname: 'Pepsi', email: 'colacola@wp.pl'},
    {id: 10, name: 'Krystiano', surname: 'Ronaldo', email: 'GOAT2@wp.pl'}];

const sub = [
    {id: 1, name: "TAI", hoursAWeek: 12},
    {id: 2, name: "Matematyka", hoursAWeek: 20},
    {id: 3, name: "Polski", hoursAWeek: 0},
    {id: 4, name: "Geografia", hoursAWeek: 0},
    {id: 5, name: "Fizyka", hoursAWeek: 0},
    {id: 6, name: "Chemia", hoursAWeek: 0},
    {id: 7, name: "Biologia", hoursAWeek: 0},
    {id: 8, name: "Religia", hoursAWeek: 2},
    {id: 9, name: "Niemiecki", hoursAWeek: 10},
    {id: 10, name: "Ang", hoursAWeek: 10}

]
app.get('/',(req,res)=> {
    res.sendFile(`${__dirname}/index.html`)
})

app.get('/kontakt',(req,res) => {
    res.sendFile(`${__dirname}/form.html`)
})

app.post('/kontakt',(req,res)=>{
    console.log(req.body)
    //res.sendFile(`${__dirname}/index.html`)
    res.redirect('/')
})

router.get('/api',(req,res) => {
    res.sendFile(`${__dirname}/file.json`)
})

router.get('/api/students',(req,res) =>{
    res.send(JSON.stringify(api))
})

router.get('/api/students/:id',(req,res)=> {
    let obj = api
    //obj = JSON.parse(api)
    let help = 0
    for(let i = 0; i < obj.length; i++) {
        if(obj[i].id == req.params.id) {
            res.json(obj[i])
            help = 1
            return 
        }
    }
    if(help == 0) {
        res.statusCode = 404
        res.setHeader('content-type','application/json')
        res.write("Nie odnaleziono linku :(")
        res.end()
    }
})

router.get('/api/subjects',(req,res)=>{
    res.send(JSON.stringify(sub))
})

router.get('/api/subjects/:id',(req,res)=>{
    let obj = sub
    let help = 0
    //obj = JSON.parse(api)
    for(let i = 0; i < obj.length; i++) {
        if(obj[i].id == req.params.id) {
            res.json(obj[i])
            help = 1
            return 
        }
    }
    if(help == 0) {
        res.statusCode = 404
        res.setHeader('content-type','application/json')
        res.write("Nie odnaleziono linku :(")
        res.end()
    }
})

app.use(router);

app.listen(port,()=>{
    console.log(`App listening on port ${port}`)
})