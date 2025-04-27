const { createSlice } = require("@reduxjs/toolkit");

const appSlice = createSlice({
    name: 'app',
    initialState: {
        isMenuOpen: true,
        isLiveChat: true
    }, 
    reducers: {
        toggleMenu: (state) => {
            state.isMenuOpen = !state.isMenuOpen;
        },
        collapseMenu: (state) => {
            state.isMenuOpen = false
        },
        liveChatStop: (state) => {
            state.isLiveChat = false
        }
    }
});

export const { toggleMenu, collapseMenu, liveChatStop } = appSlice.actions;
export default appSlice.reducer;