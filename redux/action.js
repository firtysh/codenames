import {CREATE_ROOM} from './constatnts.js'

export function createRoom(roomId){
    return {
        type : CREATE_ROOM,
        payload : roomId
    }
}