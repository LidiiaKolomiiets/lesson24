import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 5553 })

wss.on('connection', client => {
    console.log('----NEW CLIENT ---')

    client.on('message', (data) => {


        wss.clients.forEach(Client => {
            
                Client.send(data.toString())
            
        })

    })

    client.on('close', () => {
        console.log('----CLIENT DISCONNECTED----')
    })
})




