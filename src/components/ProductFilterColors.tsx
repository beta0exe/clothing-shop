"use client";

import { FilterColors } from "@/constants/routes";
import {Check} from "lucide-react";

interface Props {
    selectedColors: string[];
    onChange: (colors: string[]) => void;
    className?: string;
}

export default function ProductFilterColor({ selectedColors, onChange, className }: Props) {
    const toggleColor = (color: string) => {
        if (selectedColors.includes(color)) {
            onChange(selectedColors.filter((c) => c !== color));
        } else {
            onChange([...selectedColors, color]);
        }
    };


    return (
        <div className={`ml-3 flex items-center gap-4 py-3 flex-wrap ${className}`}>
            {FilterColors.map((c) => (
                <button
                    key={c.id}
                    type="button"
                    onClick={(e) => (e.preventDefault(), toggleColor(c.id))}
                    className="
            w-12 h-12 rounded-full flex items-center justify-center border-2 transition
            outline-none  ring-offset-0 shadow-none
            focus:outline-none focus:ring-0 focus:ring-offset-0 focus:shadow-none
            focus-visible:outline-none ring-1 ring-gray-200
          "
                    style={{
                        backgroundColor: c.hex,
                        borderColor: "#DFDFDF",
                        WebkitTapHighlightColor: "transparent",
                    }}
                    aria-pressed={selectedColors.includes(c.id)}
                >
                    {selectedColors.includes(c.id) && <Check size={20} color="#DFDFDF" />}
                </button>
            ))}
        </div>
    );
};


