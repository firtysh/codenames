import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slices/roomSlice";
import playerReducer from "./slices/playerSlice";
import cardsReducer from "./slices/cardsSlice";
import authSlice from "./slices/authSlice";
import teamDataSlice from "./slices/teamDataSlice";

const store = configureStore({
    reducer:{
        room:roomReducer,
        player:playerReducer,
        cards:cardsReducer,
        auth:authSlice,
        teamData:teamDataSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>