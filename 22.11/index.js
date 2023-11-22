const express  = require("express")
const {MongoClient, MongoKerberosError} = require("mongodb")
const router = express.Router()
const api = require("./routes/router.js")
const {PrismaClient} = require("@prisma/client")
const prisma = new PrismaClient()
const app = express()
const PORT = 3000;
app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}))

/* PRISMA  */
app.get("/display",async(req,res)=>{
    var students = await prisma.TABELA.findMany();
    res.json(students);
})
/* PRISMA  */
app.post("/add/:name/:surname/:age",async(req,res)=>{
    const data ={
        name: req.params.name,
        surname: req.params.surname,
        age: req.params.age
    }
    await prisma.TABELA.create({data: user});
})
/* PRISMA  */
app.post("/delete/:name/:surname",async(req,res)=>{

    const getData = await prisma.TABELA.delete({
        where: {
            name: req.params.name,
            surname: req.params.surname
        }
    })
})

app.listen(PORT,()=>{
    console.log(`[server]: Server is running at http://localhost:${PORT}`);
})

