import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seasonPass: 0,
  count: 0,
};

const seasonPassSlice = createSlice({
  name: "seasonPass",
  initialState,
  reducers: {
    addPass(state, action) {
      console.log(state.seasonPass);
      state.seasonPass += 1350;
      state.count += 1;
    },

    subPass(state, action) {
      console.log(state.seasonPass);
      state.seasonPass -= 1350;
      state.count -= 1;
    },
  },
});

export default seasonPassSlice.reducer;
export const { addPass, subPass } = seasonPassSlice.actions;
