"use client"
import React from 'react';
import {ShoppingCart} from "lucide-react";
import {useAppSelector} from "@/store/store";
import {totalCartItemSelector} from "@/store/features/cartSlice";

const ShoppingCardNav = () => {
    const totalItems = useAppSelector(totalCartItemSelector)
    return (
        <div className={"relative"}>
            <ShoppingCart  className={"cursor-pointer hover:text-red-700 relative z-5"}/>
            {!!totalItems && (<div className={" text-white bg-red-400 flex justify-center items-center rounded-full w-5 h-5 absolute -top-2 -right-2 z-1"}>{totalItems}</div>)}
        </div>
    );
};

export default ShoppingCardNav;
