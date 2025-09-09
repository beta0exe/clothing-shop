// components/CategoryFilters.tsx
"use client";

import { Products } from "@/constants/routes";

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
            <h2 className="font-bold text-xl mb-4">Type</h2>
            <div className="flex flex-col gap-2">
                {categories.map((cat) => {
                    const active = selectedCategories.includes(cat);
                    return (
                        <button
                            key={cat}
                            className={`text-left px-3 py-2 rounded-md border ${
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

            {selectedCategories.length > 0 && (
                <button
                    className="mt-4 text-sm underline"
                    onClick={() => onChange([])}
                >
                    Clear all
                </button>
            )}
        </div>
    );
}
