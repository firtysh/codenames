import { createSlice } from "@reduxjs/toolkit";



export type TeamData = {
    ["turn"] : "red"|"blue",
    ["status"] : string,
    ["red"]:{
        wordsLeft:number,
        hint:string,
        hintCount:number|null
    },
    ["blue"]:{
        wordsLeft:number,
        hint:string,
        hintCount:number|null
    }
}

const initial  = {} as TeamData;


const teamDataSlice = createSlice({
    name:"TeamData",
    initialState:  initial,
    reducers:{
        setTeamData : (_, action) => {
            return action.payload;
        }
    }
})

export const {setTeamData} = teamDataSlice.actions;

export default teamDataSlice.reducer;