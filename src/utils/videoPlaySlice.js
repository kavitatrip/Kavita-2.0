import { createSlice } from "@reduxjs/toolkit";

const videoPlaySlice = createSlice({
  name: "videoSelected",
  initialState: {
    video: {}
  },
  reducers: {
    playSelectedVideo: (state, action) => {
      return { ...state, ...action.payload };
    },
  },
});

export const { playSelectedVideo } = videoPlaySlice.actions;
export default videoPlaySlice.reducer;
