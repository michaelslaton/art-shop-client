import { createSlice } from "@reduxjs/toolkit";
import Product from "../../types/Product";

type InitialState = Product[];

const initialState: InitialState = [];

const artControl = createSlice({
  name: "artControl",
  initialState,
  reducers: {
  },
});

export default artControl.reducer;
// export const { lightSwitch } = artControl.actions;