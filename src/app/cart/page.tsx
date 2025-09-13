"use client"
import React from 'react';
import {useAppSelector} from "@/store/store";
import CartItem from "@/components/CartItem";
import Link from "next/link";
import {ArrowRight, ChevronRight, Tag} from "lucide-react";
import {totalPriceSelector} from "@/store/features/cartSlice";

const CartPage = () => {
    const cartItems = useAppSelector(state => state.cart.cartItems);
    const subTotal  = useAppSelector(totalPriceSelector)
    const totalDiscount = cartItems.reduce((total, item) => {
        if (item.product.isDiscounted && item.product.discountedPercentage) {
            return total + (item.quantity * item.product.price * item.product.discountedPercentage) / 100;
        }
        return total;
    }, 0);

    const discountP = cartItems.length > 0
        ? cartItems[0].product.discountedPercentage || 0
        : 0;
    const total = (subTotal - totalDiscount)

    return(
            <div className={"p-2 md:px-[7.7rem] flex px-5"}>
                <div className={"w-full"}>
                    <div className="flex gap-2 items-center mb-10 ">
                        <Link href="/" className="text-gray-600 font-semibold">Home</Link>
                        <ChevronRight color="#666666" />
                        <Link href="/products" className="text-gray-900 font-semibold">Card</Link>
                    </div>
                    <h1 className={"text-3xl md:text-5xl font-bold mb-5"}>Your Card</h1>
                    <div className={"flex flex-col md:flex-row gap-4 w-full "}>
                        <div className={" flex flex-col justify-center border-1 border-gray-200 rounded-lg min-h-[20rem] w-full"}>
                            {cartItems && cartItems.length > 0 ? cartItems.map((items) => (
                                <CartItem key={items.product.id} cartItem={items} />)):
                                <h1 className={"text-center font-bold text-3xl"}>No Item In your cart Yet</h1>}
                        </div>
                        <div className={" flex flex-col gap-5 w-full md:w-[40%] ring-1 ring-gray-200 rounded-lg p-5"}>
                            <h2 className={"font-bold text-xl"}>Order Summery</h2>
                            <div className={"w-full flex justify-between  items-center"}>
                                <h2 className={"text-[#666666] text-xl "}>Subtotal</h2>
                                <p className={"font-bold text-xl"}>${subTotal}</p>
                            </div>
                            <div className={"w-full flex justify-between items-center "}>
                                <h2 className={"text-[#666666] text-lg "}>Subtotal{discountP?` (${discountP}%)`:" (0%)"}</h2>
                                <p className={"font-bold text-xl"}>${totalDiscount}</p>
                            </div>
                            <div className={"w-full flex justify-between items-center border-b-1 border-gray-300 pb-5 "}>
                                <h2 className={"text-[#666666] text-lg "}>Delivery Fea</h2>
                                {/*can add logic for it later maybe add it in database or just generate it somehow*/}
                                <p className={"font-bold text-xl"}>Free</p>
                            </div>
                            <div className={"w-full flex justify-between items-center "}>
                                <h2 className={"text-black text-lg font-semibold "}>Total</h2>
                                <p className={"font-bold text-xl"}>${total}</p>
                            </div>
                            <div className={"flex gap-2 relative "}>
                                <input className={"h-12 bg-[#F0F0F0] w-full p-5 pl-11 rounded-full"} placeholder={"Add promo code"}/>
                                <Tag color="#8B788B" className={"absolute left-4 top-3 w-5"} />
                                <button className={"h-12 bg-black text-white p-5 text-center flex justify-center items-center rounded-full hover:bg-red-700"}>Apply</button>
                            </div>
                            <button className={"h-12 bg-black text-white  flex justify-center items-center rounded-full hover:bg-red-700"}>Go to Checkout<ArrowRight color="#FFFFFF" /></button>
                        </div>
                    </div>
                </div>

            </div>
    );
};

export default CartPage;
