import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../../types/Product";

type InitialState = {
  cartInventory: Product[];
};

const initialState: InitialState = {
  cartInventory: [],
};

const shoppingCart = createSlice({
  name: 'shoppingCart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      state.cartInventory = [...state.cartInventory, action.payload];
    },
  },
});

export default shoppingCart.reducer;
export const { addToCart } = shoppingCart.actions;