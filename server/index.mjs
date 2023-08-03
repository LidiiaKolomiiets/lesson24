import fastify from 'fastify'
import fastifyStatic from '@fastify/static'
import path from 'path'
import { fileURLToPath } from 'url';
import './socket.mjs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const server = fastify()

 

server.register(fastifyStatic, {
    root: path.join(__dirname, '../client')
})

server.listen({port:5552})
.then(() => {
    console.log('Server started')
})
.catch((error) => {
    console.log('Error')
})