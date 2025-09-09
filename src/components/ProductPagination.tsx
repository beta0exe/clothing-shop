"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductPaginationProps {
    currentPage: number;
    totalPages: number;
}

export default function ProductPagination({ currentPage, totalPages }: ProductPaginationProps) {
    const router = useRouter();
    const searchParams = useSearchParams();

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            const params = new URLSearchParams(searchParams);
            params.set("page", page.toString());
            router.push(`?${params.toString()}`);
        }
    };

    const pagesToShow = () => {
        const pages: (number | string)[] = [];
        if (totalPages <= 7) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);
            if (currentPage > 3) pages.push("...");
            if (currentPage > 2) pages.push(currentPage - 1);
            if (currentPage !== 1 && currentPage !== totalPages) pages.push(currentPage);
            if (currentPage < totalPages - 1) pages.push(currentPage + 1);
            if (currentPage < totalPages - 2) pages.push("...");
            pages.push(totalPages);
        }
        return pages;
    };

    return (
        <div className="flex items-center justify-between w-full ">
            {/* Previous */}
            <button
                onClick={() => goToPage(currentPage - 1)}
                disabled={currentPage === 1}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-base font-medium 
          ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
            >
                <ChevronLeft size={16} /> Previous
            </button>

            {/* Page Numbers */}
            <div className="flex items-center gap-3">
                {pagesToShow().map((page, idx) =>
                        page === "..." ? (
                            <span key={idx} className="text-gray-400">
              ...
            </span>
                        ) : (
                            <button
                                key={idx}
                                onClick={() => goToPage(page as number)}
                                className={`px-3 py-1 rounded-md text-sm font-medium 
                ${currentPage === page ? "bg-gray-200" : "hover:bg-gray-100"}`}
                            >
                                {page}
                            </button>
                        )
                )}
            </div>

            {/* Next */}
            <button
                onClick={() => goToPage(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl border text-base font-medium 
          ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`}
            >
                Next <ChevronRight size={16} />
            </button>
        </div>
    );
}
