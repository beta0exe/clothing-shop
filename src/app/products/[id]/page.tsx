import React from 'react';
import Link from "next/link";
import {ChevronRight} from "lucide-react";
import ProductImageDetails from "@/components/ProductImageDetails";
import ProductDetail from "@/components/ProductDetailsText";
import {Products, TopSelling} from "@/constants/routes"
import Section from "@/components/Section";
import ProductCommentSection from "@/components/ProductCommentSection";


interface Props {
    params: Promise<{ id: string }>;
}

export default async function ProductDetails({ params }: Props) {
    const { id } = await params;
    const numberId = Number(id);
    return (
        <div className={"px-5 md:px-0"}>
            <div className={"flex gap-2 items-center mb-10 md:px-[7.7rem]"}>
                <Link href={"/"} className={"text-[#666666] font-semibold"}>Home</Link>
                <ChevronRight color="#666666" />
                <Link href={"/products"} className={"text-[#666666] font-semibold"}>Shop</Link>
                <ChevronRight color="#666666" />
                <Link href={"/"} className={"text-[#666666] font-semibold"}>Men</Link>
                <ChevronRight color="#666666" />
                <Link href={`/products/${id}`} className={"font-bold text-xl"}>{id}</Link>
            </div>
            <div className={"flex flex-col w-full px-2 md:flex-row md:flex-1 md:px-[7.7rem]"}>
                <div className={"w-full md:w-1/2"}>
                    <ProductImageDetails />
                </div>
                <div className="w-full md:w-1/2">
                    {Products.map((item) =>
                        item.id === numberId ? <ProductDetail key={item.id} item={item} /> : null
                    )}
                </div>
            </div>
            {/*comment sections*/}
            <div>
                <div className={"w-full p-10 px-3 md:px-30"}>
                    <ProductCommentSection id={numberId} />
                </div>
            </div>
            <div className={"w-full py-0"}>
                <Section title={"You might also like"} products={TopSelling} className={"w-full px-5 md:px-0"}/>
            </div>
        </div>
    );
};

