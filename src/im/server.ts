import * as net from 'net'

const chatServer = net.createServer()

const clientList: net.Socket[] = []

chatServer.on('connection', client => {
  client.write('hi~ connent success!')
  clientList.push(client)

  client.on('data', data => {
    clientList.forEach(v => {
      v.write(data)
    })
  })
})

chatServer.listen(8000)
