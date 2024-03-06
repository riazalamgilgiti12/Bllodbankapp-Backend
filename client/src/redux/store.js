import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./feature/authorization/authslice";

const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
  },
});

export default store;
