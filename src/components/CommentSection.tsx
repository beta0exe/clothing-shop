"use client"
import React, { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Comment from "@/components/Comment";
import {testimonials} from "@/constants/routes";


export default function CommentSection() {
    // Explicitly type the ref as HTMLDivElement or null
    const scrollRef = useRef<HTMLDivElement | null>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const firstCard = scrollRef.current.firstElementChild as HTMLElement | null;
            if (firstCard) {
                const cardWidth = firstCard.offsetWidth;
                scrollRef.current.scrollBy({
                    left: direction === "left" ? -cardWidth : cardWidth,
                    behavior: "smooth",
                });
            }
        }
    };

    return (
        <div className="w-full h-full  p-5 relative">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-extrabold tracking-tight ml-0 md:ml-5">
                    OUR HAPPY CUSTOMERS
                </h2>
                <div className="flex gap-3 mr-5">
                    <button
                        onClick={() => scroll("left")}
                        className="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
                        aria-label="Scroll left"
                    >
                        <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => scroll("right")}
                        className="p-2 bg-white border rounded-full shadow hover:bg-gray-100"
                        aria-label="Scroll right"
                    >
                        <ChevronRight className="w-5 h-5" />
                    </button>
                </div>
            </div>

            <div
                ref={scrollRef}
                className="flex gap-6 p-3 overflow-x-auto scroll-smooth no-scrollbar"
            >
                <Comment testimonials={testimonials}/>
            </div>
        </div>
    );
}
