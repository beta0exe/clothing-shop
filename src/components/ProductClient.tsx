"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { ChevronDown, ChevronRight, SlidersVertical } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import PriceRange from "@/components/PriceRange";
import ProductFilterColor from "@/components/ProductFilterColors";
import ProductFilterSizes from "@/components/ProductFilterSizes";
import ProductPagination from "@/components/ProductPagination";
import CategoryFilters from "@/components/CategoryFilters";
import { FilterSizes } from "@/constants/routes";
import { useState, useEffect } from "react";
import FilterTitle from "@/components/FilterTitle";
import DressStyleFilter from "@/components/dressStyleFilter";
import { ProductsType} from "@/constants/types";

interface Props {
    products: ProductsType[];
    totalProducts: number;
    totalPages: number;
    currentPage: number;
    searchParams: {
        page?: string;
        categories?: string;
        colors?: string;
        sizes?: string;
        style?: string;
        minPrice?: string;
        maxPrice?: string;
        sort?: "priceAsc" | "priceDesc"; // new param for sorting

    };
}

export default function ProductClient({
                                          products,
                                          totalProducts,
                                          totalPages,
                                          currentPage,
                                          searchParams,
                                      }: Props) {
    const router = useRouter();
    const [searchQuery, setSearchQuery] = useState(false);
    // HYDRATE STATE FROM SSR SEARCH PARAMS
    const [selectedCategories, setSelectedCategories] = useState<string[]>(
        () => searchParams.categories?.split(",") ?? []
    );
    const [selectedColors, setSelectedColors] = useState<string[]>(
        () => searchParams.colors?.split(",") ?? []
    );
    const [selectedSizes, setSelectedSizes] = useState<string[]>(
        () => searchParams.sizes?.split(",") ?? []
    );
    const [selectedStyles, setSelectedStyles] = useState<string[]>(
        () => searchParams.style?.split(",") ?? []
    )
    const [priceRange, setPriceRange] = useState<[number,number]>(()=>{
        const min = Number(searchParams.minPrice) || 0;
        const max = Number(searchParams.maxPrice) || 500;
        return [min,max]
    })
    const [sort, setSort] = useState(searchParams.sort || "");


    // UPDATE URL WHEN FILTERS CHANGE (CSR)
    useEffect(() => {
        const params = new URLSearchParams();

        selectedCategories.length && params.set("categories", selectedCategories.join(","));
        selectedColors.length && params.set("colors", selectedColors.join(","));
        selectedSizes.length && params.set("sizes", selectedSizes.join(","));
        selectedStyles.length && params.set("style", selectedStyles.join(","));


        params.set("minPrice", priceRange[0].toString());
        params.set("maxPrice", priceRange[1].toString());
        if (sort) params.set("sort", sort);

        params.set("page", "1");
        router.push(`/products?${params.toString()}`,{scroll:false});
    }, [searchQuery,sort]);



    const startIndex = (currentPage - 1) * products.length;
    const endIndex = startIndex + products.length;

    return (
        <div className="pb-10">
            {/* Breadcrumbs */}
            <div className="flex gap-2 items-center mb-10 px-4 md:px-[7.7rem]">
                <Link href="/" className="text-[#666666] font-semibold">
                    Home
                </Link>
                <ChevronRight color="#666666" />
                <Link href="/products" className="text-[#666666] font-semibold">
                    Shop
                </Link>
                <ChevronRight color="#666666" />
                <span className="font-bold text-xl">Products</span>
            </div>

            <div className="flex flex-col md:flex-row px-4 gap-5 md:px-[7.7rem] ">
                {/* Filters */}
                <div className=" w-full md:w-1/4 flex flex-col rounded-2xl p-6 ring-1 ring-gray-300 self-start">
                    <div className="flex justify-between items-center border-b border-gray-300 pb-8">
                        <h1 className="text-3xl font-semibold">Filters</h1>
                        <SlidersVertical />
                    </div>

                    <CategoryFilters
                        selectedCategories={selectedCategories}
                        onChange={setSelectedCategories}
                    />

                    <div className="border-b border-gray-300 pb-5">
                        <FilterTitle title="Prices" >
                            <PriceRange value={priceRange} onChange={setPriceRange} />
                        </FilterTitle>
                    </div>

                    <div className="border-b border-gray-300 pb-5">
                        <FilterTitle title="Colors" >
                        <ProductFilterColor
                            selectedColors={selectedColors}
                            onChange={setSelectedColors}
                        />
                        </FilterTitle>
                    </div>

                    <div className="border-b border-gray-300 pb-5">
                        <FilterTitle title="Sizes" >
                        <ProductFilterSizes
                            sizeProps={FilterSizes}
                            selectedSizes={selectedSizes}
                            onChange={setSelectedSizes}
                        />
                        </FilterTitle>
                    </div>
                    {/* Dress Style */}
                    <div className="pb-5">
                            <DressStyleFilter selectedStyles={selectedStyles} onChange={setSelectedStyles} />
                            <button className="w-full bg-black hover:bg-red-700 text-white rounded-full px-5 py-5 mt-5" onClick={()=>setSearchQuery(!searchQuery)}>
                                Apply Filter
                            </button>
                    </div>
                </div>

                {/* Product Grid */}
                <div className="w-full md:w-3/4 rounded-t-2xl px-2 gap-10 flex flex-col">
                    <div className="flex items-center justify-between">
                        <label htmlFor="sort" className="font-medium text-2xl">Sort by</label>
                        <select
                            id="sort"
                            value={sort}
                            onChange={(e) => setSort(e.target.value)}

                            className="border px-2 py-1 rounded"
                        >
                            <option value="priceAsc">Price: Low to High</option>
                            <option value="priceDesc">Price: High to Low</option>
                        </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-5 gap-y-10 border-b border-gray-300 pb-10">
                        {products.map((item) => (
                            <ProductCard key={item.id} products={item} />
                        ))}
                    </div>

                    <div className="flex items-center justify-center">
                        <ProductPagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
