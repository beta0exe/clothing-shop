import React from 'react';

const DiscountLabel = ({Discount ,className}:{Discount?:number,className?:string}) => {
    return (
        <div className={`flex items-center justify-center bg-red-200 text-red-700 rounded-full text-sm md:text-xl w-10 h-6 md:w-13 md:h-8 ${className}`}>
            <p>-{Discount}</p>
        </div>
    );
};

export default DiscountLabel;
