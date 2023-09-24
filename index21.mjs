const http = require("http")
const name = '127.0.0.1'
const port = 3000


const server = http.createServer((req,res)=> {
    res.statusCode = 200
    res.setHeader('Content-Type','text/plain')
    res.End("Witaj swiecie !")
})

server.listen(port,name,()=>
    console.log('Server running at ' + name + " " + port)
)

