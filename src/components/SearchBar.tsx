import React, {useState} from 'react';
import {Search} from "lucide-react";
import {useRouter} from "next/navigation";

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const router = useRouter();


    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        if (searchTerm.trim()) {
            router.push(`/products?search=${encodeURIComponent(searchTerm)}`);
        }
    };

    return (
        <form onSubmit={handleSearch} className="md:w-2/5 h-12 relative hidden md:block">
            <Search
                color="#a2a0a0"
                className="absolute z-2 left-4 top-3 hover:text-red-700 cursor-pointer"
                onClick={handleSearch}
            />
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search For Products..."
                className="relative bg-[#F0F0F0] w-full h-full rounded-full p-5 px-13 z-1 shadow-md shadow-gray-400 focus:outline-none"
            />
        </form>
    );
};

export default SearchBar;
