// app/products/page.tsx (Server Component)

import ProductClient from "../../components/ProductClient";
import { Products as datas } from "@/constants/routes";

export default async function ProductsPage({
                                               searchParams,
                                           }: {
    searchParams: Promise<{
        page?: string;
        categories?: string;
        colors?: string;
        sizes?: string;
        style?: string;
        minPrice?: string;
        maxPrice?: string;
        sort?: "priceAsc" | "priceDesc";
        search?: string;
    }>;
}) {
    // ✅ FIX: Await searchParams (required in Next.js 15)
    const params = await searchParams;

    const currentPage = Number(params.page) || 1;
    const productsPerPage = 9;

    // --- SERVER-SIDE FILTERING ---
    const selectedCategories = params.categories?.split(",") ?? [];
    const selectedColors = params.colors?.split(",") ?? [];
    const selectedSizes = params.sizes?.split(",") ?? [];
    const selectedStyle = params.style?.split(",") ?? [];

    const searchQuery = params.search?.toLowerCase() || "";

    const filteredProducts = datas.filter((p) => {
        const matchSearch = searchQuery === "" || p.name.toLowerCase().includes(searchQuery);
        const matchCategory =
            selectedCategories.length === 0 || (p.category && selectedCategories.includes(p.category));
        const matchColor =
            selectedColors.length === 0 || (p.color && p.color.some((c) => selectedColors.includes(c)));
        const matchSize =
            selectedSizes.length === 0 || (p.sizes && p.sizes.some((s) => selectedSizes.includes(s)));
        const matchStyle =
            selectedStyle.length === 0 || (p.style && p.style.some((s) => selectedStyle.includes(s)));
        const matchPrice =
            p.price >= (Number(params.minPrice) || 0) &&
            p.price <= (Number(params.maxPrice) || 500);

        return matchSearch && matchCategory && matchColor && matchSize && matchStyle && matchPrice;
    });

    // --- SORTING ---
    if (params.sort === "priceAsc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (params.sort === "priceDesc") {
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
            searchParams={params} // ✅ Pass the resolved object
        />
    );
}
