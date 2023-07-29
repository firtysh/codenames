import { createSlice } from "@reduxjs/toolkit";

type CardData = {
    isOpen: boolean,
    word:string,
    color:string,
    isClicked:boolean,
}

const initialCardData: CardData[] = [];



const cardsSlice = createSlice({
    name:"Cards",
    initialState: initialCardData,
    reducers:{
        setCards: (state, action) => {
            return action.payload;
        },
        clickCard: (state, action) => {
            state[action.payload.index].isClicked = action.payload.data;
        },
        flipCard: (state, action) => {
            state[action.payload].isOpen = true;
        }
    }
})

export const {flipCard,setCards,clickCard} = cardsSlice.actions;

export default cardsSlice.reducer;
