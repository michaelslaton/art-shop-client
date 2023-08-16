import { createSlice } from "@reduxjs/toolkit";

type InitialState = {
    thing: number;
}

const initialState: InitialState = {
    thing: 0,
}

const newSlice = createSlice({
  name: '',
  initialState,
  reducers: {
    namedDispatchOrder: (state, action) => {
      state.thing--
    },
  },
});

export default newSlice.reducer;
export const { namedDispatchOrder } = newSlice.actions;