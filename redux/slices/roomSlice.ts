import { createSlice } from "@reduxjs/toolkit";

const initial:any = {}

const roomSlice = createSlice({
    name:"Room",
    initialState:initial,
    reducers:{
        joinRoom : (_, action) => {
            return action.payload;
        },
        leaveRoom : (state, action) => {
            state=state.members.filter((room:any) => room.player !== action.payload.player);
        }
    }
})

export const {joinRoom} = roomSlice.actions;

export default roomSlice.reducer;