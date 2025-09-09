"use client"
import React, {useState} from 'react';
import {FilterColors} from "@/constants/routes";
import {Check} from "lucide-react";

const ProductFilterColor = ({className}:{className?:string}) => {
    const [selected, setSelected] = useState(FilterColors[0].id);
    return (
        <div className={`flex items-center gap-4 py-3 flex-wrap ${className}`}>
            {FilterColors.map((c) => (
                <button
                    key={c.id}
                    type="button"
                    onClick={(e) => (e.preventDefault(), setSelected(c.id))}
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
                    aria-pressed={selected === c.id}
                >
                    {selected === c.id && <Check size={20} color="#DFDFDF" />}
                </button>
            ))}
        </div>
    );
};

export default ProductFilterColor;
