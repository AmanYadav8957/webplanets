import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center gap-2 mt-10">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <button
          key={page}
          type="button"
          onClick={() => onPageChange(page)}
          className={`w-9 h-9 flex items-center justify-center text-[13px] font-bold rounded cursor-pointer transition-colors border ${
            currentPage === page
              ? 'bg-black text-white border-black'
              : 'bg-white text-gray-800 border-gray-200 hover:border-gray-400'
          }`}
        >
          {page}
        </button>
      ))}

      {currentPage < totalPages && (
        <button
          type="button"
          onClick={() => onPageChange(currentPage + 1)}
          className="w-9 h-9 flex items-center justify-center text-[13px] font-bold rounded bg-white text-gray-800 border border-gray-200 hover:border-gray-400 cursor-pointer transition-colors"
          title="Next Page"
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      )}
    </div>
  );
};

export default Pagination;
