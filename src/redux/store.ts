import { configureStore } from "@reduxjs/toolkit";
import lightSliceReducer  from './slices/lightsSlice';

const store = configureStore({
    reducer: {
        lights: lightSliceReducer,
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;