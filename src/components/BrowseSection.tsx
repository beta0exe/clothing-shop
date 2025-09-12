import React from 'react';
import Image from 'next/image';
import Link from "next/link";

const BrowseSection = () => {
    return (
        <div className="p-3 md:p-15 ">
            <div className="bg-[#F0F0F0] flex flex-col items-center justify-center gap-20 md:p-25 rounded-2xl p-5 shadow-md shadow-gray-400">
                <h1 className="font-bold text-3xl md:text-5xl">BROWSE BY dress STYLE</h1>

                <div className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 flex-1 w-full md:p-10 gap-5 md:gap-7">

                    <Link
                        href="/products"
                        className="block col-start-1 col-end-2 row-start-1 row-end-2 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
                    >
                        <Image
                            src="/BrowseImages/1.svg"
                            alt="Category"
                            width={407}
                            height={289}
                            className="block w-full h-full object-cover"
                        />
                    </Link>

                    <Link
                        href="/products"
                        className="block col-start-2 col-end-4 row-start-1 row-end-2 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
                    >
                        <Image
                            src="/BrowseImages/2.svg"
                            alt="Category"
                            width={684}
                            height={289}
                            className="block w-full h-full object-cover"
                        />
                    </Link>

                    <Link
                        href="/products"
                        className="block col-start-3 col-end-4 row-start-2 row-end-3 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
                    >
                        <Image
                            src="/BrowseImages/3.svg"
                            alt="Category"
                            width={684}
                            height={289}
                            className="block w-full h-full object-cover"
                        />
                    </Link>

                    <Link
                        href="/products"
                        className="block col-start-1 col-end-3 row-start-2 row-end-3 rounded-2xl overflow-hidden hover:scale-105 transition duration-300"
                    >
                        <Image
                            src="/BrowseImages/4.svg"
                            alt="Category"
                            width={407}
                            height={289}
                            className="block w-full h-full object-cover"
                        />
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default BrowseSection;
