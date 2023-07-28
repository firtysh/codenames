import { createSlice } from "@reduxjs/toolkit";

type CardData = {
    isOpen: boolean,
    word:string,
    color:string
}

const initialCardData: CardData[] = [];



const cardsSlice = createSlice({
    name:"Cards",
    initialState: initialCardData,
    reducers:{
        setCards: (state, action) => {
            return action.payload;
        },
        flipCard: (state, action) => {
            state[action.payload].isOpen = true;
        }
    }
})

export const {flipCard,setCards} = cardsSlice.actions;

export default cardsSlice.reducer;
