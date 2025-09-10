"use client";

interface Props {
    sizeProps: string[];
    selectedSizes: string[];
    onChange: (sizes: string[]) => void;
    className?: string;
}

export default function ProductFilterSizes({ sizeProps, selectedSizes, onChange, className }: Props) {
    const toggleSize = (size: string) => {
        if (selectedSizes.includes(size)) {
            onChange(selectedSizes.filter((s) => s !== size));
        } else {
            onChange([...selectedSizes, size]);
        }
    };

    return (
        <div className={`ml-3 flex flex-wrap gap-2 ${className}`}>
            {sizeProps.map((size) => {
                const active = selectedSizes.includes(size);
                return (
                    <button
                        type="button"
                        key={size}
                        onClick={(e) => {
                            e.preventDefault();
                            toggleSize(size);
                        }}

                        aria-pressed={selectedSizes.includes(size)}
                        className={`mb-3 w-20 h-12 rounded-4xl mr-2 justify-center items-center ${selectedSizes.includes(size) ? "bg-black text-white font-semibold": "bg-[#F0F0F0] text-[#606060]"}`}>
                        {size}
                    </button>
                );
            })}
        </div>
    );
}
