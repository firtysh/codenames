import { createSlice } from "@reduxjs/toolkit";

type Player = {
    name : string,
    id: string,
    team:string,
    role:string
}

const initial : Player[] =[]

const playerSlice = createSlice({
    name:"Player",
    initialState: initial,
    reducers:{
        newPlayer : (state, action) => {
            return action.payload
        }
    }

})

export const {newPlayer} = playerSlice.actions;

export default playerSlice.reducer;