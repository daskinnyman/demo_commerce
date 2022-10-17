import { cartSlice } from './cartSlice/cartSlice';
import { combineReducers, configureStore } from '@reduxjs/toolkit';


const rootReducer = combineReducers({ cart: cartSlice.reducer })

export const store = configureStore({
    reducer: rootReducer
});