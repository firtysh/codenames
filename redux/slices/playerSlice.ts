import { createSlice } from "@reduxjs/toolkit";


const playerSlice = createSlice({
    name:"Player",
    initialState:{
        red:{
            operative :[{}],
            spymaster:[{}]
        },
        blue:{
            operative:[{}],
            spymaster:[{}]
        }
    },
    reducers:{
        joinRedOP: (state, action) => {
            state.red.operative.push(action.payload);
        },
        joinRedSM: (state, action) => {
            state.red.spymaster.push(action.payload);
        },
        joinBlueOP: (state, action) => {
            state.blue.operative.push(action.payload);
        },
        joinBlueSM: (state, action) => {
            state.blue.spymaster.push(action.payload);
        }
    }

})

export const {joinRedOP, joinRedSM, joinBlueOP, joinBlueSM} = playerSlice.actions;

export default playerSlice.reducer;