import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";

const songsSlice = createSlice({
  name: "song",
  initialState: [],
  reducers: {
    //'song'+'/'+'addSong'='song/addSong'
    addSong(state, action) {
      //console.log(state.length);
      //STATE IS NOT THE BIG STATE OBJECT IS THE STORE ITS IS THE PIECE OF STSTE MANAGED BY THIS REDUCER
      state.push(action.payload);
    },
    //'song'+'/'+'removeSong'='song/removeSong'
    removeSong(state, action) {
      const index = state.indexOf(action.payload);
      state.splice(index, 1);
    },
  },
  extraReducers(builder) {
    // builder.addCase("movie/reset", (state, action) => {
    // builder.addCase(moviesSlice.actions.reset, (state, action) => {
    //   return [];
    // });

    builder.addCase(reset, (state, action) => {
      return [];
    });
  },
});

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;
