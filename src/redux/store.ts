import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        // reducer: reducer, 
    }
});

export default store;
export type RootStare = ReturnType<typeof store.getState>