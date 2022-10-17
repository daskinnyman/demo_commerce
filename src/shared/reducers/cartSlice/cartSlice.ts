import { createSlice } from '@reduxjs/toolkit';

export interface CartItem {
    productId: string;
    productImg:string;
    name: string;
    color: string;
    price: number;
    amount: number;
}

interface CartState {
    items: CartItem[]
    totalPrice: number;
}

const initialState: CartState = {
    items: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action) {
            const product: CartItem = action.payload;
            const items = [...state.items]
            const itemIndex = items.findIndex(item => item.productId === product.productId);
            if (itemIndex !== -1) {
                items[itemIndex].amount += product.amount;
            } else {
                items.push({ ...product });
            }

            state.items = items;
            state.totalPrice = items.reduce((prev, curr) => {
                prev += +curr.amount * +curr.price;
                return prev
            }, 0);
        },
        removeFromCart(state, action) {
            const product: CartItem = action.payload;
            const items = state.items.filter(item => item.productId !== product.productId);
            state.items = items;
            state.totalPrice = items.reduce((prev, curr) => {
                prev += +curr.amount * +curr.price;
                return prev
            }, 0);
        },
        resetCart(state) {
            state = { ...initialState }
        },
    },
});

// action creators
export const { addToCart, removeFromCart, resetCart } = cartSlice.actions;

// reducer
export default cartSlice.reducer;