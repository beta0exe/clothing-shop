"use client";

import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";

export default function PriceRange() {
    const [values, setValues] = useState([50, 200]);

    return (
        <div className="flex flex-col items-center gap-4 w-full max-w-md mx-auto">
            {/* Slider */}
            <Slider.Root
                className="relative flex items-center w-full h-5"
                min={0}
                max={500}
                step={10}
                value={values}
                onValueChange={setValues}
            >
                <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
                    <Slider.Range className="absolute bg-black rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-5 h-5 bg-black rounded-full" />
                <Slider.Thumb className="block w-5 h-5 bg-black rounded-full" />
            </Slider.Root>

            {/* Price labels */}
            <div className="flex justify-between w-full">
                <span className="text-lg font-medium">${values[0]}</span>
                <span className="text-lg font-medium">${values[1]}</span>
            </div>
        </div>
    );
}
