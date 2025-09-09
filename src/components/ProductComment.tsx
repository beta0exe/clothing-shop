import React from "react";

interface ProductCommentProps {
    data: {
        name: string;
        review: string;
        postedAt: string;
    };
}

const ProductComment: React.FC<ProductCommentProps> = ({ data }) => {
    return (
        <div className="bg-white rounded-2xl shadow p-5 flex flex-col gap-3 hover:shadow-md transition">
            {/* Stars (just static for now, you can make it dynamic later) */}
            <div className="text-yellow-500 text-sm">★★★★★</div>

            {/* Reviewer Name */}
            <h2 className="font-bold text-lg">{data.name}</h2>

            {/* Review Text */}
            <p className="text-gray-600 text-sm">{data.review}</p>

            {/* Posted Date */}
            <span className="text-gray-400 text-xs">{data.postedAt}</span>
        </div>
    );
};

export default ProductComment;
