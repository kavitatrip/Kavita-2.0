const { configureStore } = require("@reduxjs/toolkit");
import appSlice from './slices'

const store = configureStore({
    reducer: {
        app: appSlice
    }
});

export default store;