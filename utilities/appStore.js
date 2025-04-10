import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reduxSlices/cartSlice";

const appStore = configureStore({
    //main or big reducer which can take multiple reducers of each slice
    reducer: {
        cart: cartReducer
    },
});

export default appStore;