"use client"
import React from 'react';
import {useAppSelector} from "@/store/store";
import CartItem from "@/components/CartItem";

const CartPage = () => {
    const cartItems = useAppSelector(state => state.cart.cartItems);
    return(
            <div className={"p-2"}>{cartItems.map((items) => <CartItem cartItem={items} />)}</div>
    );
};

export default CartPage;
