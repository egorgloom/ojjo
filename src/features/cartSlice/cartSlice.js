import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
    },
    reducers: {
        addToCart: (state, { payload }) => {
            let newArrayCart = [...state.cart]
            const found = state.cart.find(({ id }) => id === payload.id);
            if (found) {
                newArrayCart = newArrayCart.map((item) => {
                    return item.id === payload.id ? { ...item, quantity: payload.quantity || item.quantity + 1 } :
                        item
                })
            } else {
                newArrayCart.push({ ...payload, quantity: 1 })
            }
            state.cart = newArrayCart
        },
        removeToCart: (state, { payload }) => {
            state.cart = state.cart.filter(({ id }) => id !== payload)
        }
    }
})

export const { addToCart, removeToCart } = cartSlice.actions;
export default cartSlice.reducer 