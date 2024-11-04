import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "../Features/cartSlice";
import seasonPassSlice from "../Features/seasonPassSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    seasonPass: seasonPassSlice,
  },
});

export default store;
