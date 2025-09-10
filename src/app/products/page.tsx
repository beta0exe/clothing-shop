// app/products/page.tsx (Server Component)

import ProductClient from "../../components/ProductClient";
import { Products as datas } from "@/constants/routes";

interface Props {
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

export default async function ProductsPage({ searchParams }: Props) {
    const currentPage = Number(searchParams.page) || 1;
    const productsPerPage = 9;

    // --- SERVER-SIDE FILTERING ---
    const searchParams1 = await searchParams
    const selectedCategories = searchParams1.categories?.split(",") ?? [];
    const selectedColors = searchParams1.colors?.split(",") ?? [];
    const selectedSizes = searchParams1.sizes?.split(",") ?? [];
    const selectedStyle =  searchParams1.style?.split(",") ?? [];



    const filteredProducts = datas.filter((p) => {
        const matchCategory =
            selectedCategories.length === 0 || selectedCategories.includes(p.category);
        const matchColor =
            selectedColors.length === 0 || selectedColors.includes(p.color);
        const matchSize =
            selectedSizes.length === 0 || p.sizes.some((size) => selectedSizes.includes(size));
        const matchStyle = selectedStyle.length === 0 || selectedStyle.includes(p.style);

        const matchPrice =
            p.price >= (Number(searchParams.minPrice) || 0) &&
            p.price <= (Number(searchParams.maxPrice) || 500);



        return matchCategory && matchColor && matchSize && matchStyle && matchPrice;
    });

    if (searchParams.sort === "priceAsc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (searchParams.sort === "priceDesc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    const totalProducts = filteredProducts.length;
    const totalPages = Math.ceil(totalProducts / productsPerPage);

    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const currentProducts = filteredProducts.slice(startIndex, endIndex);

    return (
        <ProductClient
            products={currentProducts}
            totalProducts={totalProducts}
            totalPages={totalPages}
            currentPage={currentPage}
            searchParams={searchParams}
        />
    );
}
