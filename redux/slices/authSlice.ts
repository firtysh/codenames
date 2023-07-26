import {createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "Auth",
    initialState: {
        id: '',
        name: '',
        role: '',
        team: '',
    },
    reducers: {
        initID: (state, action) => {            
            state.id = action.payload;
        },
        updateName: (state, action) => {
            state.name = action.payload;
        },
        updateRole: (state, action) => {
            state.role = action.payload;
        },
        updateTeam: (state, action) => {
            state.team = action.payload;
        }
    }
})

export const { initID,updateRole,updateTeam,updateName } = authSlice.actions;

export default authSlice.reducer;