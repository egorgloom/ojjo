import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from './apiSlice/apiSlice';
import cartSlice from './cartSlice/cartSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer,
        cart: cartSlice,
    },
    devTools: true,

    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware)
})

