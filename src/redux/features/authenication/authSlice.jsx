import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  isLoading: true,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setLoading, setUser } = authSlice.actions;

export default authSlice.reducer;
