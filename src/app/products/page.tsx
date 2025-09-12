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
    const searchParams1 = await searchParams;
    const currentPage = Number(searchParams1.page) || 1;
    const productsPerPage = 9;

    // --- SERVER-SIDE FILTERING ---
    const selectedCategories = searchParams1.categories?.split(",") ?? [];
    const selectedColors = searchParams1.colors?.split(",") ?? [];
    const selectedSizes = searchParams1.sizes?.split(",") ?? [];
    const selectedStyle =  searchParams1.style?.split(",") ?? [];



    const filteredProducts = datas.filter((p) => {
        const matchCategory =
            selectedCategories.length === 0 || selectedCategories.includes(p.category);
        const matchColor =
            selectedColors.length === 0 || p.color.some((c) => selectedColors.includes(c));
        const matchSize =
            selectedSizes.length === 0 || p.sizes.some((size) => selectedSizes.includes(size));
        const matchStyle = selectedStyle.length === 0 || p.style.some((s) => selectedStyle.includes(s));

        const matchPrice =
            p.price >= (Number(searchParams1.minPrice) || 0) &&
            p.price <= (Number(searchParams1.maxPrice) || 500);



        return matchCategory && matchColor && matchSize && matchStyle && matchPrice;
    });

    if (searchParams1.sort === "priceAsc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (searchParams1.sort === "priceDesc") {
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
