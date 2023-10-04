import * as http from 'http'
import {readFile} from 'fs/promises'
import { writeFile } from 'fs/promises'

const port = 3000
const host = '127.0.0.1'

const api = [{
    id: 1,
    name : 'Kowalski'
},{
    id: 2,
    name: 'Szef'
}]

const server = http.createServer(async(req,res)=>{
    const url = req.url
    const method = req.method
    
    if(url == '/') {
        res.statusCode = 200
        const html = await readFile('index.html')

        res.setHeader('content-type','text/html')

        res.write(html)
        return res.end()
    }

    else if(url == '/dziekujemy') {
        res.statusCode = 200
        const html = await readFile('dziekujemy.html')

        res.setHeader('content-type','text/html')

        res.write(html)
        res.end()
    }

    else if(url == '/api') {
        res.statusCode = 200
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(api))
        res.end()
    }

    else if(url === "/kontakt" && method === "POST") {
        const body = []

        console.log("wywolanie ifa z postem !!")

        req.on("data", (chunk) => {
            console.log("data event")
            console.log(chunk.toString())
            body.push(chunk)
        })
        req.on("end",async() =>{
            const parsed = Buffer.concat(body).toString()
            const msg = parsed.split('=')[1]
            await writeFile('contact/message' + Date.now()+'.txt',msg)
            res.statusCode = 302
            res.setHeader('Location','/')
            return res.end()
        })
    }
    else  {
        res.statusCode = 404
        res.setHeader('content-type','application/json')
        res.write("Nie odnaleziono linku :(")
        res.end()
    }
})

server.listen(port,host,()=>
    console.log('Server running at ' + host + ":" + port)
)