import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import lightSliceReducer  from './slices/lightsSlice';
import artControlReducer from './slices/artControlSlice';
import shoppingCartReducer from './slices/shoppingCartSlice';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    storage,
    blacklist: ['artControl'],
};

const reducer = combineReducers({
    lights: lightSliceReducer,
    artControl: artControlReducer,
    shoppingCart: shoppingCartReducer,
});

// const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
    reducer: reducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;