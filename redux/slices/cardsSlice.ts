import { createSlice } from "@reduxjs/toolkit";
import generateCardData from "../../utils/cardDataGenerator";

const initialCardData = generateCardData()
const cardsSlice = createSlice({
    name:"Cards",
    initialState: initialCardData,
    reducers:{
        flipCard: (state, action) => {
            state[action.payload].isOpen = true;
        }
    }
})

export const {flipCard} = cardsSlice.actions;

export default cardsSlice.reducer;
