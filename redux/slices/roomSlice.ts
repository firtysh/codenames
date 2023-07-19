import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
    name:"Room",
    initialState:{},
    reducers:{
        createRoom : (state, action) => {
            state = action.payload;
        }
    }
})

export const {createRoom} = roomSlice.actions;

export default roomSlice.reducer;