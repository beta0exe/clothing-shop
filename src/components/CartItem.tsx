import React from 'react';
import { CartItem as CartItemType} from "../constants/types"
import Image from "next/image";

interface Props {
    cartItem:CartItemType;
}


const CartItem = ({cartItem}:Props) => {
    return (
        <div className={"grid grid-cols-5 items-center py-2 px-5"}>
            <Image src={cartItem.product.imageUrl} width={200} height={150} alt={cartItem.product.name} className={"rounded-lg"} />
            <p className={"text-slate-600 text-center"}>{cartItem.product.name}</p>
            <div>Price For each: {cartItem.product.price} $ </div>
            <p>Quantity: {cartItem.quantity}</p>
            <p>Total Price: {cartItem.quantity * cartItem.product.price}</p>
        </div>
    );
};

export default CartItem;
