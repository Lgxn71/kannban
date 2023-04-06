import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isDark: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    switchThemes(state) {
      state.isDark = !state.isDark;
    },
  },
});
export const store = configureStore({
  reducer: uiSlice.reducer,
});
export const { switchThemes } = uiSlice.actions;
