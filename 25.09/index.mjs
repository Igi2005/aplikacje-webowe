import * as http from 'http'
import {readFile} from 'fs/promises'
const  port = 3000
const host = '127.0.0.1'

const server = http.createServer(async(req,res)=> {
    const url = req.url;

    if(url == '/') {
        res.statusCode = 200

        const html = await readFile('index.html')

        res.setHeader('content-type','text/html')

        res.write(html)
        res.end()
    }

})

server.listen(port, host, () => {
    console.log("Listening...");
})
