import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./slices/roomSlice";
import playerReducer from "./slices/playerSlice";
import cardsReducer from "./slices/cardsSlice";
import authSlice from "./slices/authSlice";

const store = configureStore({
    reducer:{
        room:roomReducer,
        player:playerReducer,
        cards:cardsReducer,
        auth:authSlice,
    }
})

export default store;