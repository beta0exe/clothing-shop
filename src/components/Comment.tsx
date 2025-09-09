import React from 'react';
import {BadgeCheck} from "lucide-react";

interface Testimonial {
    name: string;
    review: string;
}

const Comment = ({testimonials}:{testimonials:Testimonial[]}) => {
    return (
        <>
            {testimonials.map((t: Testimonial, idx: number) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-full h-[10rem] md:w-2/10  md:h-50 items-start justify-center flex flex-col  bg-white border border-gray-200 shadow-md shadow-gray-400 rounded-xl p-6"
                    >
                        {/* Stars */}
                        <div className="flex text-yellow-400 text-lg mb-2">★★★★★</div>
                        {/* Name */}
                        <p className="font-semibold text-2xl flex items-center justify-center gap-2">{t.name} <BadgeCheck color="#01AB31"  className={"mt-1"}/></p>
                        {/* Review */}
                        <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                            {t.review}
                        </p>
                        <p>Posted at {}</p>
                    </div>
                ))}
        </>
    );
};

export default Comment;
