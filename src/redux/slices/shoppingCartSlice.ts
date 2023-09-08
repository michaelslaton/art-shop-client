import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import Product from "../../types/Product";

export interface CartProduct extends Product {
  quantity: number;
};

type InitialState = {
  cartInventory: CartProduct[];
};

const initialState: InitialState = {
  cartInventory: [],
};

const shoppingCart = createSlice({
  name: "shoppingCart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Product>) => {
      let results = state.cartInventory;
      if (results.filter((product)=> product.id === action.payload.id).length === 0) state.cartInventory = [ ...results, { ...action.payload, quantity: 1 } ];
      else {
        const index = results.findIndex((item)=> item.id === action.payload.id);
        results[index].quantity++;
        state.cartInventory = results;
      };
    },
    removeFromCart: (state, action: PayloadAction<number>) => {
      let results = state.cartInventory;
      const index = results.findIndex((item)=> item.id === action.payload);
      if ( results[index].quantity > 1 ) results[index].quantity--;
      else if (results[index].quantity === 1) results.splice(index,1);
      state.cartInventory = results;
    },
    emptyCart: (state) => {
      state.cartInventory = [];
    }
  },
});

export default shoppingCart.reducer;
export const { addToCart, removeFromCart, emptyCart } = shoppingCart.actions;