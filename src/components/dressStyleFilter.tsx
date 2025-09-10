import React from 'react';
import FilterTitle from "@/components/FilterTitle";
import {ChevronRight} from "lucide-react";
import {Products} from "@/constants/routes";

interface styleFiltersProps {
    selectedStyles: string[];
    onChange: (categories: string[]) => void;
}


const DressStyleFilter = ({selectedStyles,onChange}:styleFiltersProps) => {

    const styles = Array.from(new Set(Products.map((p) => p.style)));

    const toggleStyles = (style:string) => {
        if (selectedStyles.includes(style)) {
            onChange(selectedStyles.filter(s => s !== style));
        } else {
            onChange([...selectedStyles, style]);
        }
    };

    return (
        <FilterTitle title="Dress Style" >
            <div className="ml-4 text-xl text-[#666666]">
                {styles.map((style) => {
                    const active = selectedStyles.includes(style);
                    return (
                        <button key={style}
                                className={`w-full ml-2 text-left px-3 py-4 mb-2 rounded-md border ${
                                    active
                                        ? "bg-black text-white border-black"
                                        : "bg-white text-gray-700 border-gray-200"
                                }`}
                                onClick={() => toggleStyles(style)}

                        >
                            {style}
                        </button>
                        )
                })}
            </div>
        </FilterTitle>
    );
};

export default DressStyleFilter;