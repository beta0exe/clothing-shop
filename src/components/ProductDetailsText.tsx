"use client"
import React from 'react';
import {CartItem, Product, ProductsType} from "../constants/types"
import {Star} from "lucide-react";
import DiscountLabel from "@/components/DiscountLabel";
import { useState } from "react";
import { Check } from "lucide-react";
import {Bcolors, FilterColors, Products, Sizes} from "@/constants/routes";
import {useAppDispatch, useAppSelector} from "@/store/store";
import {cartIncrement, productQuantitySelector} from "@/store/features/cartSlice";


interface products {
    products : Product
}


const ProductDetail = ({item}:{item:Product}) => {
    const [selected, setSelected] = useState(Bcolors[0].id);
    const dispatch = useAppDispatch();
    const [sizeSelected, setSizeSelected] = useState<string>(Sizes[0]);

    const [count, setCount] = useState(1);

    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : 1));


    const finalPrice = item?.isDiscounted && item.discountedPercentage? item.price * (1-item.discountedPercentage /100) : item?.price;
    return (
        <div className={"px-10 p-2"}>
            <h1 className={"font-bold text-4xl  mb-5"}>{item?.name}</h1>
            {/*stars*/}
            <div className={"flex gap-1 items-center  mb-5"}>
                {Array.from({length:item?.stars ?? 0}).map((_, i) => (
                    <Star key={i} color="#ead706" size={30}/>
                ))} <p className={"md:text-lg ml-2 text-sm"}>{item?.stars?.toFixed(1)}/<span className={"text-gray-400"}>5</span></p>
            </div>

            <div className={"flex gap-5 font-bold text-sm md:text-3xl mb-5"}>
                <p>${finalPrice?.toFixed(2)}</p>
                {item?.isDiscounted && (
                    <>
                        <p className={"text-gray-400 line-through"}>${item.price}</p>
                        <DiscountLabel Discount={item.discountedPercentage} />
                    </>
                )}
            </div>
            <div className={"text-p-small-gray pb-3 border-b-1 border-gray-300"}>
                <p>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
            </div>
             <div className={"py-3 border-b-1 border-gray-300 "}>
                 <p className={"text-[#616060]  text-xl font-medium"}>Select Colors</p>
                 {/*colors*/}
                 <div className="flex items-center gap-4 py-3">
                     {item.color?.map((colorId) => {
                         const colorObj = FilterColors.find((fc) => fc.id === colorId);
                         if (!colorObj) return null; // skip if color not found

                         return (
                             <button
                                 key={colorId}
                                 type="button"
                                 onClick={(e) => (e.preventDefault(), setSelected(colorId))}
                                 className="w-12 h-12 rounded-full flex items-center justify-center border-2 transition ring-1 ring-gray-400 "
                                 style={{
                                     backgroundColor: colorObj.hex, // ✅ USE HEX VALUE
                                     borderColor: "transparent",
                                     WebkitTapHighlightColor: "transparent",
                                 }}
                                 aria-pressed={selected === colorId}
                             >
                                 {selected === colorId && <Check size={20} color="gray" />}
                             </button>
                         );
                     })}
                 </div>
             </div>
            <div className={"py-3 border-b-1 border-gray-300"}>
                <p className={"text-[#616060] py-3  text-xl font-medium"}>Choose Size</p>
                {item.sizes?.map((c) => (
                        <button
                            type="button"
                            key={c}
                            onClick={(e) => {
                                e.preventDefault();
                                setSizeSelected(c);
                            }}

                            aria-pressed={sizeSelected === c}
                            className={`mb-3 w-20 h-12 rounded-4xl mr-2 justify-center items-center ${sizeSelected === c ? "bg-black text-white font-semibold": "bg-[#F0F0F0] text-[#606060]"}`}>
                            {c}
                        </button>
                    ))
                }
            </div>
            <div className={"py-3 flex items-center gap-10"}>
                <div className="flex items-center justify-center bg-[#F5F5F5] rounded-full w-40 h-14 ">
                    <button
                        type="button"
                        onClick={decrement}
                        className="flex-1 text-2xl font-light text-black"
                    >
                        –
                    </button>

                    <span className="flex-1 text-center text-xl font-medium text-black">
        {count}
      </span>

                    <button
                        type="button"
                        onClick={increment}
                        className="flex-1 text-2xl font-light text-black"
                    >
                        +
                    </button>
                </div>
                <button onClick={()=>dispatch(cartIncrement(
                    {product:item,color:selected,size:sizeSelected,quantity:count}))}
                        className={"bg-black font-semibold w-96 h-14 rounded-full text-secondary active:bg-red-700"}>
                    Add to Cart
                </button>
            </div>

        </div>
    );
};

export default ProductDetail;
