import React from 'react';
import ProductCard from "@/components/ProductCard";
import {ProductsType} from "@/constants/types";
import Link from "next/link";

const Section = ({title ,products,marginLine,className}:{title?:string ,products?:ProductsType[],marginLine?:boolean,className?:string}) => {
    return (
        <div className={`justify-center items-center flex flex-col  md:p-10 text-black gap-10 ${className ? className : ""}`}>
            <div className={`justify-center items-center flex flex-col  md:p-5 text-black gap-10 py-3 ${marginLine?" border-b-1 border-gray-300":""} py-4`}>
                <h1 className={"text-3xl md:text-5xl font-bold"}>{title}</h1>
                <div className={`py-0 md:py-10 flex flex-row flex-1 md:grid  md:grid-cols-4  md:grid-rows-1 w-full md:px-50 px-10 gap-5 `}>
                    {products?.map((product) => (
                        <ProductCard key={product.id} products={product} />
                    ))}
                </div>
                <Link  href={"/products"} className={"border-1 border-[#E6E6E6] rounded-full px-12 font-semibold py-5 hover:text-white hover:bg-red-700  cursor-pointer"}>View All</Link>
            </div>
        </div>
    );
};

export default Section;
