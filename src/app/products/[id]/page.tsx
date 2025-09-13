// app/products/[id]/page.tsx
import React from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ProductImageDetails from "@/components/ProductImageDetails";
import ProductDetail from "@/components/ProductDetailsText";
import { Products, TopSelling } from "@/constants/routes";
import Section from "@/components/Section";
import ProductCommentSection from "@/components/ProductCommentSection";
import { Product } from "@/constants/types";

export default async function ProductDetails({
                                                 params,
                                             }: {
    params: Promise<{ id: string }>;
}) {
    // ✅ Await params so Next.js type checker is satisfied
    const { id } = await params;
    const numberId = Number(id);

    const product: Product | undefined = Products.find((p) => p.id === numberId);
    if (!product) return <p className="p-10">Product not found</p>;

    return (
        <div className="px-5 md:px-0">
            {/* Breadcrumb */}
            <div className="flex gap-2 items-center mb-10 md:px-[7.7rem]">
                <Link href="/" className="text-gray-600 font-semibold">
                    Home
                </Link>
                <ChevronRight color="#666666" />
                <Link href="/products" className="text-gray-600 font-semibold">
                    Shop
                </Link>
                <ChevronRight color="#666666" />
                <span className="font-bold text-xl">{product.name}</span>
            </div>

            {/* Product section */}
            <div className="flex flex-col md:flex-row gap-5 md:px-[7.7rem]">
                <div className="w-full md:w-1/2">
                    <ProductImageDetails product={product} />
                </div>
                <div className="w-full md:w-1/2">
                    <ProductDetail item={product} />
                </div>
            </div>

            {/* Comments */}
            <div className="w-full p-2 md:px-30">
                <ProductCommentSection id={numberId} />
            </div>

            {/* Recommended */}
            <div className="w-full py-0">
                <Section
                    title="You might also like"
                    products={TopSelling}
                    className="w-full px-5 md:px-0"
                />
            </div>
        </div>
    );
}
