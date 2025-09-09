import React from 'react';
import Image from 'next/image';
import Link from "next/link";
const Footer = () => {
    return (
        <div className={"bg-[#F0F0F0] p-1 md:p-15 w-full"}>
            <div className={"flex flex-1 flex-wrap md:justify-around border-b-1 border-gray-400 p-5 md:p-10 w-full justify-evenly"}>
                <div className={"flex flex-col items-start md:gap-8 w-full md:w-auto gap-4 mb-5"}>
                    <h2 className={"font-bold text-4xl md:text-5xl "}>SHOP.CO</h2>
                    <p className={"w-5/6 md:w-3/4 text-p-small-gray"}>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                    <div className={"flex items-center justify-between gap-3 md:gap-5 flex-1"}>
                        <Image src={"/footer/1.svg"} alt={"twiter"} width={45} height={45} className={"hover:scale-110 transition duration-100"} />
                        <Image src={"/footer/2.svg"} alt={"facebook"} width={40} height={40} className={"hover:scale-110 transition duration-100"}/>
                        <Image src={"/footer/3.svg"} alt={"instagram"} width={55} height={55} className={"mt-2 hover:scale-110 transition duration-100"} />
                        <Image src={"/footer/4.svg"} alt={"github"} width={45} height={45} className={"hover:scale-110 transition duration-100"}/>
                    </div>
                </div>
                <div className={"flex flex-col items-start text-p-small-gray gap-3 w-1/2 md:w-auto mb-5"}>
                    <h2 className={" text-2xl font-normal md:font-semibold text-primary"}>Company</h2>
                    <Link href="/" className={"hover:text-red-700"}>About</Link>
                    <Link href="/" className={"hover:text-red-700"}>Features</Link>
                    <Link href="/" className={"hover:text-red-700"}>Works</Link>
                    <Link href="/" className={"hover:text-red-700"}>Career</Link>
                </div>
                <div className={"flex flex-col items-start text-p-small-gray gap-3 w-1/2 md:w-auto"}>
                    <h2 className={" text-2xl font-normal md:font-semibold text-primary"}>Help</h2>
                    <Link href="/" className={"hover:text-red-700"}>Customer Support</Link>
                    <Link href="/" className={"hover:text-red-700"}>Delivery Details</Link>
                    <Link href="/" className={"hover:text-red-700"}>Terms & Conditions</Link>
                    <Link href="/" className={"hover:text-red-700"}>Privacy Policy</Link>
                </div>
                <div className={"flex flex-col items-start text-p-small-gray gap-3 w-1/2 md:w-auto mb-5"}>
                    <h2 className={" text-2xl font-normal md:font-semibold text-primary"}>FAQ</h2>
                    <Link href="/" className={"hover:text-red-700"}>Account</Link>
                    <Link href="/" className={"hover:text-red-700"}>Manage Deliveries</Link>
                    <Link href="/" className={"hover:text-red-700"}>Orders</Link>
                    <Link href="/" className={"hover:text-red-700"}>Payments</Link>
                </div>
                <div className={"flex flex-col items-start text-p-small-gray gap-3 w-1/2 md:w-auto"}>
                    <h2 className={" text-2xl font-normal md:font-semibold text-primary"}>Resources</h2>
                    <Link href="/" className={"hover:text-red-700"}>Free eBooks</Link>
                    <Link href="/" className={"hover:text-red-700"}>Development Tutorial</Link>
                    <Link href="/" className={"hover:text-red-700"}>How to - Blog</Link>
                    <Link href="/" className={"hover:text-red-700"}>Youtube Playlist</Link>
                </div>
            </div>
            <div className={"flex justify-between p-5 items-center"}>
                <p className={"text-p-small-gray"}>Shop.co © 2000-2023, All Rights Reserved</p>
                <div className={"flex gap-1 flex-wrap"}>
                    <Image src={"/footer/Badge.svg"} alt={"payment1"} width={65} height={65}/>
                    <Image src={"/footer/Badge1.svg"} alt={"payment2"} width={65} height={45}/>
                    <Image src={"/footer/Badge2.svg"} alt={"payment3"} width={65} height={45}/>
                    <Image src={"/footer/Badge3.svg"} alt={"payment4"} width={65} height={45}/>
                    <Image src={"/footer/Badge4.svg"} alt={"payment5"} width={65} height={45}/>
                </div>
            </div>
        </div>
    );
};

export default Footer;
