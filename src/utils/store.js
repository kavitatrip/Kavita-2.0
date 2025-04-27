const { configureStore } = require("@reduxjs/toolkit");
import appSlice from './slices';
import searchSlice from './searchSlice';
import chatSlice from './chatSlice';
import videoPlaySlice from './videoPlaySlice';

const store = configureStore({
    reducer: {
        app: appSlice, 
        search: searchSlice,
        chatSlice: chatSlice, 
        videoSelected: videoPlaySlice
    }
});

export default store;