import { createSlice } from "@reduxjs/toolkit";



const roomSlice = createSlice({
    name:"Room",
    initialState: {
        roomId:'',
        members:[{
            id:"",
            name:"",
            owner:false,
        }]
    },
    reducers:{
        joinRoom : (_, action) => {
            return action.payload;
        },
        leaveRoom : (state, action) => {
            return state;
        }
    }
})

export const {joinRoom,leaveRoom} = roomSlice.actions;

export default roomSlice.reducer;