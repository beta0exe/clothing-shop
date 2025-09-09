"use client"
import React from 'react';
import {ProductsType} from "@/constants/types";
import Image from 'next/image';
import {Star} from "lucide-react"
import DiscountLabel from "@/components/DiscountLabel";
import {useRouter} from "next/navigation";

const  ProductCard = ({products}: {products: ProductsType }) => {
    const router = useRouter()
    const finalPrice = products.isDiscounted && products.discountedPercentage? products.price * (1-products.discountedPercentage /100) : products.price;
    return (
        <>
            <div onClick={()=>{
                router.push(`/products/${products.id}`)
            }} className={"items-start justify-start md:justify-center flex flex-col gap-2 md:gap-5  p-5 shadow-md shadow-gray-400 rounded-lg hover:scale-105 transition duration-200"}>
                <Image src={products.imageUrl} width={295} height={295} alt={"product"} className={"h-full w-full "} />
                <p className={"font-semibold text-sm md:text-xl nowrap truncate leading-8 max-w-[165px] md:max-w-full md:wrap-normal md:leading-14  "}>{products.name}</p>
                <div className={"flex gap-1 items-center "}>
                    {Array.from({length:products.stars ?? 0}).map((_, i) => (
                        <Star key={i} color="#ead706" />
                    ))} <p className={"md:text-lg ml-2 text-sm"}>{products.stars?.toFixed(1)}/5</p>
                </div>
                <div className={"flex gap-5 font-bold text-sm md:text-3xl "}>
                    <p>${finalPrice?.toFixed(2)}</p>
                    {products.isDiscounted && (
                        <>
                            <p className={"text-gray-400 line-through"}>${products.price}</p>
                            <DiscountLabel Discount={products.discountedPercentage} />
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default ProductCard;
