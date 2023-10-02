import * as http from 'http'
import {readFile} from 'fs/promises'

const port = 3000
const host = '127.0.0.1'

const api = {
    id: 1,
    name : 'Kowalski'
}

const server = http.createServer(async(req,res)=>{
    const url = req.res
    if(url == '/') {
        const html = await readFile('index.html')

        res.setHeader('content-type','text/html')

        res.write(html)
        res.end()
    }

    if(url == '/dziekujemy') {

    }

    if(url == '/api') {
        res.setHeader('content-type', 'application/json')
        res.write(JSON.stringify(api))
        res.end()
    }

})