import {Readable, Writable} from'stream'
import * as fs from 'fs'

const file = fs.createWriteStream("random-" +  Date.now()+'.txt')
var help
async function * generate() {
    for(var i = 0; i < 20; i++) {
        help = Math.floor(Math.random() * (-420 - 2137) - 420)
        yield help
    }
}

const readable = Readable.from(generate())
readable.on('data',(chunk) => {
    file.write(chunk.toString())
})