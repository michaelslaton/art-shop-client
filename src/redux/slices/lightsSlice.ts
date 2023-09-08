import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    lightsOn: boolean;
}

const initialState: InitialState = {
    lightsOn: true,
}

const lightsSlice = createSlice({
  name: "lights",
  initialState,
  reducers: {
    lightSwitch: (state) => {
      state.lightsOn = !state.lightsOn
    },
  },
});

export default lightsSlice.reducer;
export const { lightSwitch } = lightsSlice.actions;