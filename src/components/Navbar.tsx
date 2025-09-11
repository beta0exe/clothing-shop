"use client"
import React, {useState} from 'react';
import Image from 'next/image';
import SingUpDiscount from "@/components/SingUpDiscount";
import {Nav_routes} from "@/constants/routes";
import Link from "next/link";
import {ChevronDown, ChevronUp, CircleUserRound, Search, ShoppingCart} from "lucide-react"
import ShoppingCardNav from "@/components/ShoppingCartNav";

const Navbar = ({className}:{className?:string}) => {
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <nav className={`w-full h-full bg-[#FFFFFF] ${className}`}>
            <SingUpDiscount/>
            <div className={"px-10 md:px-30 py-8 flex items-center justify-between"}>
                <Link href={"/"} >
                    <Image src={"/nav/Logo.svg"} width={200} height={200} alt={"logo"} />
                </Link>
                <ul className={" gap-10 hidden md:flex"}>
                    {Nav_routes.map((item) => (
                        <li key={item.name} className="flex items-center gap-1 text-xl font-semibold hover:text-red-700">
                            <Link href={item.path}>{item.name}</Link>
                            {item.hasDropdown && (
                                <button
                                    type="button"
                                    onClick={() => setOpenDropdown((prev) => !prev)}
                                    className="flex items-center cursor-pointer">
                                    {openDropdown ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                                </button>
                            )}
                        </li>
                    ))}
                </ul>
                <div className={"md:w-2/5   h-12 relative "}>
                    <Search color="#a2a0a0" className={"absolute z-2  left-4 top-3 hover:text-red-700 cursor-pointer"}/>
                    <input
                        type="text"
                        placeholder="Search For Products..."
                        className="relative bg-[#F0F0F0] w-full h-full rounded-full p-5 px-13 z-1 hidden md:block shadow-md shadow-gray-400 focus:outline-none focus:ring-0 cursor-pointer"
                    />
                </div>
                <div className={"flex items-center gap-3 relative"}>
                    <Link href={"/cart"}><ShoppingCardNav /></Link>
                    <CircleUserRound  className={"cursor-pointer hover:text-red-700"}/>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
