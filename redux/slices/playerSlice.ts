import { createSlice } from "@reduxjs/toolkit";


const playerSlice = createSlice({
    name:"Player",
    initialState:[{
        name:"test",
        id:"test",
        team:"red",
        role:"spymaster",
    }],
    reducers:{
        newPlayer : (state, action) => {
            state.push(action.payload);
        }
    }

})

export const {newPlayer} = playerSlice.actions;

export default playerSlice.reducer;