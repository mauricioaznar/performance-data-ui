import io from 'socket.io-client'


const devUrl = 'http://localhost:4000'
const serverUrl = 'https://performance-server.mauaznar.com'
const url = process.env.NODE_ENV === "development" ? devUrl : serverUrl
console.log(url)


let socket = io.connect(serverUrl)

socket.emit('clientAuth', 'asdfasd')

export default socket