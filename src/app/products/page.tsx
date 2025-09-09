"use client"

import {useState} from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight, SlidersVertical } from "lucide-react";
import { Products as datas, FilterSizes } from "../../constants/routes";
import ProductCard from "@/components/ProductCard";
import PriceRange from "@/components/PriceRange";
import ProductFilterColor from "@/components/ProductFilterColors";
import FilterTitle from "@/components/FilterTitle";
import ProductFilterSizes from "@/components/ProductFilterSizes";
import ProductPagination from "@/components/ProductPagination";
import CategoryFilters from "@/components/CategoryFilters";

interface Props {
    params: {id: string};
    searchParams: { page?: string };
}

export default  function Products({ params, searchParams }: Props) {
    const { id } =  params;
    const [selectedCategories, setSelectedCategories] = useState<string []> ([]);

    const fixedSearch =  searchParams;
    const currentPage = Number(fixedSearch.page) || 1;
    const productsPerPage = 9;

    const filterdProducts = selectedCategories.length === 0 ? datas :
        datas.filter((p)=>selectedCategories.includes(p.category))

    const totalProducts = filterdProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = filterdProducts.slice(startIndex, endIndex);


    return (
        <div className="pb-10">
            <div className="flex gap-2 items-center mb-10 md:px-[7.7rem]">
                <Link href={"/"} className="text-[#666666] font-semibold">Home</Link>
                <ChevronRight color="#666666" />
                <Link href={"/products"} className="text-[#666666] font-semibold">Shop</Link>
                <ChevronRight color="#666666" />
                <Link href={`/products/${id}`} className="font-bold text-xl">{id}</Link>
            </div>

            <div className="flex gap-5 md:px-[7.7rem]">
                {/* Filters */}
                <div className="w-1/4 flex flex-col rounded-2xl p-6 ring-1 ring-gray-300 self-start">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-8">
                        <h1 className="text-3xl font-semibold">Filters</h1>
                        <SlidersVertical />
                    </div>

                    <CategoryFilters selectedCategories={selectedCategories} onChange={setSelectedCategories} />

                    {/* Price */}
                    <div className="border-b border-gray-300 pb-5">
                        <FilterTitle title="Price" />
                        <PriceRange />
                    </div>

                    {/* Colors */}
                    <div className="border-b border-gray-300 pb-5">
                        <FilterTitle title="Colors" />
                        <ProductFilterColor className="items-center justify-center" />
                    </div>

                    {/* Sizes */}
                    <div className="border-b border-gray-300 pb-5">
                        <FilterTitle title="Size" />
                        <ProductFilterSizes sizeProps={FilterSizes} className="p-1" />
                    </div>

                    {/* Dress Style */}
                    <div className="pb-5">
                        <FilterTitle title="Dress Style" />
                        <div className="text-xl text-[#666666]">
                            {["Casual", "Formal", "Party", "Gym"].map((style, i) => (
                                <div key={i} className="flex justify-between items-center py-5">
                                    <p>{style}</p>
                                    <ChevronRight color="#666666" />
                                </div>
                            ))}
                            <button className="w-full bg-black hover:bg-red-700 text-white rounded-full px-5 py-5 mt-5">
                                Apply Filter
                            </button>
                        </div>
                    </div>
                </div>

                {/* Products */}
                <div className="w-3/4 rounded-t-2xl px-2 gap-10 flex flex-col">
                    <div className="flex items-center justify-between">
                        <h1 className="font-bold text-5xl">some products</h1>
                        <p className="text-[#616060]">
                            Showing {startIndex + 1}-{Math.min(endIndex, totalProducts)} of {totalProducts} Products
                            <span className="ml-2 text-black">
                Sort by: Most Popular <ChevronDown className="inline" />
              </span>
                        </p>
                    </div>

                    <div className="grid grid-cols-3 gap-x-5 gap-y-10 border-b border-gray-300 pb-10">
                        {currentProducts.map((item) => (
                            <ProductCard key={item.id} products={item} />
                        ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex items-center justify-center">
                        <ProductPagination currentPage={currentPage} totalPages={totalPages} />
                    </div>
                </div>
            </div>
        </div>
    );
}
