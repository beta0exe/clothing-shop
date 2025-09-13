import React, {ReactNode, useState} from 'react';
import {ChevronDown, ChevronUp} from "lucide-react";

const FilterTitle = ({title,className,children}:{title:string,className?:string,children?:ReactNode}) => {
    const [hide,setHide] = useState(true);
    return (
        <div>
            <div className={`items-center flex py-5 justify-between ${className}`}>
                <h2 className={"text-3xl px-2 font-semibold"}>{title}</h2>
                {hide? <ChevronDown color="#000000" onClick={()=>(setHide(!hide))} /> : <ChevronUp color="#000000" onClick={()=>(setHide(!hide))} />}
            </div>
            <div className={hide?"hidden":""}>
                {children}
            </div>
        </div>
    );
};

export default FilterTitle;
