import React, {useEffect, useState} from 'react';
import { CartItem as CartItemType} from "../constants/types"
import Image from "next/image";
import {useAppDispatch} from "@/store/store";
import {cartDecrement, cartIncrement,cartRemove} from "@/store/features/cartSlice";
import {Trash2} from "lucide-react";

interface Props {
    cartItem:CartItemType;
}


const CartItem = ({cartItem}:Props) => {
    const [count, setCount] = useState(cartItem.quantity);
    const dispatch = useAppDispatch();

    useEffect(() => {
        setCount(cartItem.quantity);
    },[cartItem.quantity])

    return (
        <div className={"w-full flex flex-1 justify-between border-b-1 border-gray-200  items-center  py-2 px-5"}>
            <div className={"flex py-3 gap-5 h-full "}>
                <Image src={cartItem.product.imageUrl} width={200} height={150} alt={cartItem.product.name} className={"rounded-lg"} />
                <div className={"flex flex-col  justify-around h-full items-start text-sm font-semibold"}>
                    <p className={"text-lg"}>{cartItem.product.name}</p>
                    <p className={"text-lg"}><span className={"font-bold text-lg"}>Color:</span>   {cartItem.color}</p>
                    <p className={"text-lg"}><span className={"font-bold text-lg"}>Size:</span>   {cartItem.size}</p>
                    <div className={"text-lg"}>Price For each Item: {cartItem.product.price} $ </div>
                </div>
            </div>
            <div className={"flex flex-col h-full gap-5 justify-between py-5 items-end"}>

                <Trash2 color="#E92F2F" onClick={()=>dispatch(cartRemove({product:cartItem.product,
                    color:cartItem.color,size:cartItem.size}))} />
                <div className="flex items-center justify-center bg-[#F5F5F5] rounded-full w-40 h-14 ">
                    <button
                        type="button"
                        onClick={() =>
                            dispatch(
                                cartDecrement({
                                    product: cartItem.product,
                                    quantity: count,
                                    color: cartItem.color,
                                    size: cartItem.size,
                                })
                            )
                        }
                        className="flex-1 text-2xl font-light text-black"
                    >
                        –
                    </button>

                    <span className="flex-1 text-center text-xl font-medium text-black">
                         {count}
                    </span>

                    <button
                        type="button"
                        onClick={() =>
                            dispatch(
                                cartIncrement({
                                    product: cartItem.product,
                                    quantity: 1,
                                    color: cartItem.color,
                                    size: cartItem.size,
                                })
                            )
                        }
                        className="flex-1 text-2xl font-light text-black"
                    >
                        +
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
