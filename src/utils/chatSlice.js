import { createSlice } from "@reduxjs/toolkit";
import { LIVE_CHAT_COUNT } from "./constants";

const chatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
    chatActive: false,
  },
  reducers: {
    addMessage: (state, action) => {
      state.messages.splice(LIVE_CHAT_COUNT, 1);
      state.messages.unshift(action.payload);
    },
    chatStart: (state) => {
      state.chatActive = true;
    },
    chatStop: (state) => {
      state.chatActive = false;
    },
  },
});

export const { addMessage, chatStart, chatStop } = chatSlice.actions;
export default chatSlice.reducer;
