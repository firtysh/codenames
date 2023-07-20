import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name:"Room",
    initialState:[{
        player:"test",
        name:"test",
    }],
    reducers:{
        createRoom : (state, action) => {
            state.push(action.payload);
        },
        joinRoom : (state, action) => {
            state.push(action.payload);
        },
        leaveRoom : (state, action) => {
            state=state.filter((room) => room.player !== action.payload.player);
        }
    }
})

export const {createRoom} = roomSlice.actions;

export default roomSlice.reducer;