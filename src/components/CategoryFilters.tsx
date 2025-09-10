// components/CategoryFilters.tsx
"use client";

import { Products } from "@/constants/routes";
import FilterTitle from "@/components/FilterTitle";

interface CategoryFiltersProps {
    selectedCategories: string[];
    onChange: (categories: string[]) => void;
}

export default function CategoryFilters({
                                            selectedCategories,
                                            onChange,
                                        }: CategoryFiltersProps) {
    const categories = Array.from(new Set(Products.map((p) => p.category)));

    const toggleCategory = (cat: string) => {
        if (selectedCategories.includes(cat)) {
            onChange(selectedCategories.filter((c) => c !== cat));
        } else {
            onChange([...selectedCategories, cat]);
        }
    };

    return (
        <div className="border-b border-gray-300 pb-5">
            <FilterTitle title="Dress Types" >
            <div className="flex flex-col gap-2">
                {categories.map((cat) => {
                    const active = selectedCategories.includes(cat);
                    return (
                        <button
                            key={cat}
                            className={`text-xl text-[#666666] ml-3 text-left px-3 py-4 rounded-md border ${
                                active
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-gray-700 border-gray-200"
                            }`}
                            onClick={() => toggleCategory(cat)}
                        >
                            {cat}
                        </button>
                    );
                })}
            </div>
            </FilterTitle>

        </div>
    );
}