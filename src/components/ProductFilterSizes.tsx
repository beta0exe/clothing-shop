"use client"
import React, {useState} from 'react';

const ProductFilterSizes = ({sizeProps,className}:{sizeProps:string[],className?:string}) => {
    const Sizes = sizeProps;
    const [sizeSelected, setSizeSelected] = useState<string>(Sizes[0]);
    return (
        <div className={`${className}`}>
            {Sizes.map((c) => (
                <button
                    type="button"
                    key={c}
                    onClick={(e) => {
                        e.preventDefault();
                        setSizeSelected(c);
                    }}

                    aria-pressed={sizeSelected === c}
                    className={`mb-3 w-20 h-12 rounded-4xl mr-2 justify-center items-center ${sizeSelected === c ? "bg-black text-white font-semibold": "bg-[#F0F0F0] text-[#606060]"}`}>
                    {c}
                </button>
            ))
            }
        </div>
    );
};

export default ProductFilterSizes;
