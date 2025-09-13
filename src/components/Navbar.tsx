"use client";

import Image from "next/image";
import SingUpDiscount from "@/components/SingUpDiscount";
import Link from "next/link";
import ShoppingCardNav from "@/components/ShoppingCartNav";
import SearchBar from "@/components/SearchBar";
import NavLinks from "@/components/NavLinks";
import {CircleUserRound} from "lucide-react";

const Navbar = ({ className }: { className?: string }) => {

    return (
        <nav className={`w-full h-full bg-[#FFFFFF] ${className}`}>
            <SingUpDiscount />
            <div className="px-10 md:px-30 py-8 flex items-center justify-between">
                {/* Logo */}
                <Link href={"/"}>
                    <Image src={"/nav/Logo.svg"} width={200} height={200} alt={"logo"} />
                </Link>

                {/* Navigation Links */}
                <NavLinks />


                <SearchBar />

                {/* Icons */}
                <div className="flex items-center gap-3 relative">
                    <Link href={"/cart"}>
                        <ShoppingCardNav />
                    </Link>
                    <Link href={"/login"}>
                        <CircleUserRound className="cursor-pointer hover:text-red-700" />
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
