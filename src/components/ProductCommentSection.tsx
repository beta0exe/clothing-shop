"use client";

import React, { useState } from "react";
import { CommentSections, Products, testimonials,faqs } from "../constants/routes";
import { ChevronDown, SlidersVertical } from "lucide-react";
import ProductComment from "@/components/ProductComment";

interface ProductCommentSectionProps {
    id: number;
}


export default function ProductCommentSection({ id }: ProductCommentSectionProps) {
    const [sectionSelected, setSectionSelected] = useState<string>(CommentSections[1]);
    const [visibleCount, setVisibleCount] = useState<number>(6);
    const [openFAQ, setOpenFAQ] = useState<number | null>(null);

    const handleLoadMore = () => setVisibleCount((prev) => prev + 6);
    const toggleFAQ = (index: number) => {
        setOpenFAQ((prev) => (prev === index ? null : index));
    };

    return (
        <div>
            {/* Tabs */}
            <div className="flex w-full flex-1 items-center justify-around border-b border-gray-300">
                {CommentSections.map((section) => (
                    <button
                        key={section}
                        onClick={(e) => {
                            e.preventDefault();
                            setSectionSelected(section);
                        }}
                        className={`w-full p-5 transition-colors duration-200 font-semibold ${
                            sectionSelected === section
                                ? "border-b-2 border-black text-black"
                                : "text-gray-400"
                        }`}
                    >
                        {section}
                    </button>
                ))}
            </div>

            {/* Product Details Section */}
            {sectionSelected === CommentSections[0] && (
                <div className="py-5 md:py-10 flex justify-center flex-col gap-5">
                    <div className="flex items-center justify-center mb-5">
                        <h1 className="text-4xl font-bold">Product Details</h1>
                    </div>
                    <div>
                        {Products.filter((product) => product.id === id).map((product) => (
                            <div
                                key={product.id}
                                className="flex flex-1 flex-col md:flex-row md:gap-45 gap-5 text-p-small-gray w-full"
                            >
                                <h1 className="text-lg">Product Title: {product.name}</h1>
                                <p>Is it still available? {product ? "Yes" : "Nope"}</p>
                                <p>Delivery Time: Under 1 day</p>
                                <p>
                                    Do we have any discount on it?{" "}
                                    {product.isDiscounted ? "Yes" : "Nope"}
                                </p>
                                <p>Original Price: ${product.price}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Reviews Section */}
            {sectionSelected === CommentSections[1] && (
                <div>
                    {/* Header */}
                    <div className="flex items-center justify-between py-5">
                        <h1 className="font-bold text-3xl">All Reviews</h1>
                        <div className="flex items-center gap-3">
                            <button className="rounded-full bg-[#F0F0F0] p-4">
                                <SlidersVertical />
                            </button>
                            <button className="bg-[#F0F0F0] rounded-3xl p-4 flex gap-2 items-center justify-center">
                                Latest <ChevronDown />
                            </button>
                            <button className="bg-black text-sm md:text-base text-white p-4 rounded-3xl">
                                Write a Review
                            </button>
                        </div>
                    </div>

                    {/* Reviews Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full">
                        {testimonials.slice(0, visibleCount).map((item, index) => (
                            <ProductComment key={index} data={item} />
                        ))}
                    </div>

                    {/* Load More Button */}
                    {visibleCount < testimonials.length && (
                        <div className="py-5 flex justify-center">
                            <button
                                onClick={handleLoadMore}
                                className="bg-white text-black ring-1 ring-gray-300 p-5 rounded-full px-15 hover:bg-red-700 hover:text-white"
                            >
                                Load More Reviews
                            </button>
                        </div>
                    )}
                </div>
            )}

            {/* FAQ Section */}
            {sectionSelected === CommentSections[2] && (
                <div className="mt-10">
                    <h2 className="text-3xl font-bold mb-5 text-center">Frequently Asked Questions</h2>
                    <div className="flex flex-col gap-3">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="border border-gray-300 rounded-2xl p-4 shadow-sm bg-white"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="flex justify-between items-center w-full text-left font-semibold"
                                >
                                    <span>{faq.question}</span>
                                    <ChevronDown
                                        className={`transition-transform duration-300 ${
                                            openFAQ === index ? "rotate-180" : ""
                                        }`}
                                    />
                                </button>
                                {openFAQ === index && (
                                    <p className="mt-3 text-gray-600">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}
