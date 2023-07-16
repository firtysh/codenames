import io, { Socket } from 'socket.io-client'

let socket: Socket;
const connectSocket = (user_id:string)=>{
    socket = io('http://10.0.2.2:3000',{
    query: {
        message: 'I am Ironman',
        user_id:user_id
    }
})
}

export {connectSocket,socket}