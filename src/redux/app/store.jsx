import { configureStore } from "@reduxjs/toolkit";
import { api } from "../features/api/api";
import authSlice from "../features/authenication/authSlice";

const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
    auth: authSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});
export default store;
