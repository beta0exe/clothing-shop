import React, {useState} from 'react';
import {Nav_routes} from "@/constants/routes";
import Link from "next/link";
import {ChevronDown, ChevronUp} from "lucide-react";

const NavLinks = () => {
    const [openDropdown, setOpenDropdown] = useState(false);
    return (
        <ul className="gap-10 hidden md:flex">
            {Nav_routes.map((item) => (
                <li key={item.name} className="flex items-center gap-1 text-xl font-semibold hover:text-red-700">
                    <Link href={item.path}>{item.name}</Link>
                    {item.hasDropdown && (
                        <button
                            type="button"
                            onClick={() => setOpenDropdown((prev) => !prev)}
                            className="flex items-center cursor-pointer"
                        >
                            {openDropdown ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                        </button>
                    )}
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;
