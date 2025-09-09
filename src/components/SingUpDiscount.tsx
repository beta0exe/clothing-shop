"use client"
import React, {useState} from 'react';
import Link from "next/link";
import {X } from "lucide-react";

const SingUpDiscount = () => {
    const [hide,setHide] = useState(false);
    return (
        <div className={`bg-primary w-full h-[2.6rem] relative ${hide?"hidden":"block"} `}>
            <div className={"p-2 flex items-center flex-row justify-center mr-0 md:mr-15 text-sm md:text-base"}>
               <p className={"text-secondary text-wider "}>Sign up and get 20% off to your first order.</p>
                <Link href={"#"} className={"underline text-secondary ml-2 "}>Sign Up Now</Link>
            </div>
                <X onClick={()=> setHide(!hide)} color={"white"} className={"absolute right-30 top-2.5 hidden md:block cursor-pointer"}/>
        </div>
    );
};

export default SingUpDiscount;
