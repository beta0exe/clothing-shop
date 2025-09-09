import React from 'react';
import Image from 'next/image';
import {BrandLogos, HeroBg} from "../constants/routes"
import Link from "next/link";

const Hero = () => {
    return (
    <div>
        <div className={"bg-[#F2F0F1] h-full md:h-[45vw] bg-no-repeat md:bg-cover bg-right-top md:bg-right"} style={{backgroundImage: `url(${HeroBg})`,backgroundPositionY:60, backgroundPositionX:60}}>
            <div className={"h-full flex flex-col md:flex-row flex-1"}>
                <div className={"md:px-35 px-0 py-0 md:py-15 mt-0 md:mt-50 w-full flex flex-col items-center md:items-start "}>
                    <h1 className={"uppercase text-5xl font-bold md:hidden text-center mb-10 mt-10"}>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className={"w-[100%] md:w-[55rem] font-semibold  text-p-gray mb-15 text-center"}>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <Link href={"/products"} className={"md:ml-80 border-1 border-[#E6E6E6] rounded-full px-12 font-semibold py-5 bg-black text-white transition duration-200 mb-10 hover:bg-red-700  cursor-pointer"}>Shop Now</Link>
                    <div className={"flex w-[100vw] ml-6 md:ml-0 mb-5 md:mb-0 flex-wrap items-center justify-center md:justify-start"}>
                        <div className={" border-r-0 md:border-r-1 border-gray-400 pr-10  "}>
                            <h2 className={"semiTitles text-center"}>200+</h2>
                            <p className={"text-p-gray text-lg"}>International Brands</p>
                        </div>
                        <div className={"border-r-0 md:border-r-1 border-gray-400 px-10 "}>
                            <h2 className={"semiTitles text-center "}>2,000+</h2>
                            <p className={"text-p-gray w-full text-xg"}>High-Quality Products</p>
                        </div>
                        <div className={"px-10 "}>
                            <h2 className={"semiTitles text-center mr-10 md:mr-0"}>30,000+</h2>
                            <p className={"text-p-gray text-xg"}>Happy Customers</p>
                        </div>
                    </div>
                </div>
                <div className={"relative w-full hidden md:block"}>
                    <Image src={"/hero/Vector.svg"} alt={"stars"} width={50} height={50}  className={"top-15 left-0 absolute"}/>
                    <Image src={"/hero/Vector.svg"} alt={"stars"} width={80} height={80}  className={"absolute top-60 right-25"}/>
                </div>
            </div>
        </div>
        <div className={"h-full p-10 bg-primary flex items-center justify-around flex-wrap gap-2"}>
            {BrandLogos.map((item) => (
                <Image key={item.name} src={item.path} alt={item.name} width={150} height={130} className={"mb-2"}/>
            ))}
        </div>
    </div>
    );
};

export default Hero;
