import { configureStore } from "@reduxjs/toolkit";
import lightSliceReducer  from './slices/lightsSlice';
import artControlReducer from './slices/artControlSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';

const store = configureStore({
    reducer: {
        lights: lightSliceReducer,
        artControl: artControlReducer,
        shoppingCart: shoppingCartReducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;