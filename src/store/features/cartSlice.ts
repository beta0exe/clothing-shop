import { CartItem, ProductsType } from "@/constants/types";
import { createSelector, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "@/store/store";

export interface CartState {
    cartItems: CartItem[];
}

const InitialState: CartState = {
    cartItems: [],
};

interface AddToCartPayload {
    product: ProductsType;
    color: string;
    quantity: number;
    size: string;
}

interface RemoveFromCartPayload {
    product: ProductsType;
    color: string;
    size: string;
}

export const cartSlice = createSlice({
    name: "cart",
    initialState: InitialState,
    reducers: {
        cartIncrement: (state, action: PayloadAction<AddToCartPayload>) => {
            const { product, color, size,quantity = 1 } = action.payload;
            const item = state.cartItems.find(
                (elem) =>
                    elem.product.id === product.id &&
                    elem.color === color &&
                    elem.size === size
            );

            if (item) {
                item.quantity+= quantity;
            } else {
                state.cartItems.push({ product, quantity, color, size });
            }
        },

        cartDecrement: (state, action: PayloadAction<RemoveFromCartPayload>) => {
            const { product, color, size } = action.payload;
            const itemIndex = state.cartItems.findIndex(
                (elem) =>
                    elem.product.id === product.id &&
                    elem.color === color &&
                    elem.size === size
            );

            if (itemIndex !== -1) {
                if (state.cartItems[itemIndex].quantity > 1) {
                    state.cartItems[itemIndex].quantity--;
                } else {
                    // remove completely when quantity hits 0
                    state.cartItems.splice(itemIndex, 1);
                }
            }
        },
    },
});

// Selectors
const cartItems = (state: RootState) => state.cart.cartItems;

export const totalCartItemSelector = createSelector([cartItems], (cartItems) =>
    cartItems.reduce((total: number, curr: CartItem) => total + curr.quantity, 0)
);

export const totalPriceSelector = createSelector([cartItems], (cartItems) =>
    cartItems.reduce(
        (total: number, curr: CartItem) => total + curr.quantity * curr.product.price,
        0
    )
);

export const productQuantitySelector = createSelector(
    [cartItems, (cartItems, productId: number) => productId],
    (cartItems, productId) =>
        cartItems.find((el) => el.product.id === productId)?.quantity
);

export const { cartIncrement, cartDecrement } = cartSlice.actions;
export default cartSlice.reducer;
