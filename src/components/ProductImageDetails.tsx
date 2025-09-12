"use client"
import React, {useState} from 'react';
import Image from "next/image";
import {Product} from "@/constants/types";

interface props{
    product: Product;
}

const ProductImageDetails = ({product}:props) => {
    const [selected,setSelected] = useState("/productDetails/1.svg");
    return (
        <div className="grid grid-cols-4 grid-rows-6 gap-3">
            <Image src={"/productDetails/1.svg"} alt={"productDetailsImage"}  height={167} width={152} onClick={()=>(
                setSelected("/productDetails/1.svg")
            )}  className={"active:ring-1 active:ring-black rounded-3xl row-span-2"}/>
            <Image src={"/productDetails/2.svg"} alt={"productDetailsImage"} height={167} width={152} onClick={()=>(
                setSelected("/productDetails/2.svg")
            )}  className={"active:ring-1 active:ring-black rounded-2xl row-span-2 col-start-1 row-start-3"} />
            <Image src={"/productDetails/3.svg"} alt={"productDetailsImage"} height={167} width={152} onClick={()=>(
                setSelected("/productDetails/3.svg")
            )}  className={"active:ring-1 active:ring-black rounded-2xl row-span-2 col-start-1 row-start-5"}/>
            <Image src={selected} alt={"productDetailsImage"} height={530} width={530} style={{objectPosition:"center 10%"}} className={"col-span-3 row-span-6 col-start-2 row-start-1 w-full rounded-3xl h-[35rem] object-cover"} />
        </div>


);
};

export default ProductImageDetails;
