// redux/cartSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductsType } from "@/constants/types";

export interface CartItem {
    product: ProductsType;
    quantity: number;
    selectedColor?: string;
    selectedSize?: string;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (
            state,
            action: PayloadAction<{
                product: ProductsType;
                quantity: number;
                selectedColor?: string;
                selectedSize?: string;
            }>
        ) => {
            const { product, quantity, selectedColor, selectedSize } = action.payload;

            const existing = state.items.find(
                (item) =>
                    item.product.id === product.id &&
                    item.selectedColor === selectedColor &&
                    item.selectedSize === selectedSize
            );

            if (existing) {
                existing.quantity += quantity;
            } else {
                state.items.push({
                    product,
                    quantity,
                    selectedColor,
                    selectedSize,
                });
            }
        },

        removeFromCart: (
            state,
            action: PayloadAction<{
                productId: number;
                selectedColor?: string;
                selectedSize?: string;
            }>
        ) => {
            state.items = state.items.filter(
                (item) =>
                    !(
                        item.product.id === action.payload.productId &&
                        item.selectedColor === action.payload.selectedColor &&
                        item.selectedSize === action.payload.selectedSize
                    )
            );
        },

        updateQuantity: (
            state,
            action: PayloadAction<{
                productId: number;
                quantity: number;
                selectedColor?: string;
                selectedSize?: string;
            }>
        ) => {
            const item = state.items.find(
                (i) =>
                    i.product.id === action.payload.productId &&
                    i.selectedColor === action.payload.selectedColor &&
                    i.selectedSize === action.payload.selectedSize
            );
            if (item) {
                item.quantity = action.payload.quantity;
            }
        },

        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } =
    cartSlice.actions;
export default cartSlice.reducer;
