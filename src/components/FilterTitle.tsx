import React from 'react';
import {ChevronUp} from "lucide-react";

const FilterTitle = ({title,className}:{title:string,className?:string}) => {
    return (
        <div className={`items-center flex py-5 justify-between ${className}`}>
            <h2 className={"text-3xl px-2 font-semibold"}>{title}</h2>
            <ChevronUp color="#000000" />
        </div>
    );
};

export default FilterTitle;
