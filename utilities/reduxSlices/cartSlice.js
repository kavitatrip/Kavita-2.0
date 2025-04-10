import { createSlice } from "@reduxjs/toolkit";

//createslice is a function which takes configuration of each slice
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []
    }, 
    //write reducer functions corresponding to each action
    reducers: {
        //mutating the state
        addItems: (state, action) => {
            state.items.push(action.payload); //Pasta
        },
        removeItems: (state) => {
            state.items.pop();
        },
        clearItems: (state) => {
            state.items.length = 0;
        }
    }
});

export  const {addItems, removeItems, clearItems} = cartSlice.actions;
export default cartSlice.reducer;
