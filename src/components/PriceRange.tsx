"use client";

import * as Slider from "@radix-ui/react-slider";
import { useState } from "react";


interface PriceRangeProps {
    value: [number, number];
    onChange: (value: [number, number]) => void;
    min?: number;
    max?: number;
}

export default function PriceRange({ value, onChange, min = 0, max = 500 }: PriceRangeProps) {
    return (
        <div className="ml-2 flex flex-col items-center gap-4 w-full max-w-md mx-auto">
            <Slider.Root
                className="relative flex items-center w-full h-5"
                min={min}
                max={max}
                step={10}
                value={value}
                onValueChange={onChange}
            >
                <Slider.Track className="bg-gray-200 relative grow rounded-full h-2">
                    <Slider.Range className="absolute bg-black rounded-full h-full" />
                </Slider.Track>
                <Slider.Thumb className="block w-5 h-5 bg-black rounded-full" />
                <Slider.Thumb className="block w-5 h-5 bg-black rounded-full" />
            </Slider.Root>

            <div className="flex justify-between w-full">
                <span className="text-lg font-medium">${value[0]}</span>
                <span className="text-lg font-medium">${value[1]}</span>
            </div>
        </div>
    );
}
