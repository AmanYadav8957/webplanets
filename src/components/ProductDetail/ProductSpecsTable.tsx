import React, { useState } from 'react';
import type { ProductSpecification } from './types';

interface ProductSpecsTableProps {
  specifications: ProductSpecification[];
  productTitle: string;
}

const ProductSpecsTable: React.FC<ProductSpecsTableProps> = ({ specifications, productTitle }) => {
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description');

  return (
    <div className="w-full mt-14 border-t border-gray-200 pt-8">
      {/* Tabs Headers */}
      <div className="flex items-center gap-8 border-b border-gray-200 mb-6">
        <button
          type="button"
          onClick={() => setActiveTab('description')}
          className={`pb-3 text-[14px] font-bold tracking-wide transition-colors cursor-pointer bg-transparent border-none ${
            activeTab === 'description'
              ? 'text-gray-900 border-b-2 border-black -mb-[1px]'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          Description
        </button>

        <button
          type="button"
          onClick={() => setActiveTab('reviews')}
          className={`pb-3 text-[14px] font-bold tracking-wide transition-colors cursor-pointer bg-transparent border-none ${
            activeTab === 'reviews'
              ? 'text-gray-900 border-b-2 border-black -mb-[1px]'
              : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          Reviews (0)
        </button>
      </div>

      {/* Tab Content */}
      {activeTab === 'description' ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200 text-left text-[13px] sm:text-[13.5px]">
            {/* Table Header: Solid Black matching screenshot */}
            <thead>
              <tr className="bg-black text-white">
                <th className="py-3 px-4 font-bold tracking-wider text-[13px] w-1/3 sm:w-1/4 border-r border-gray-700">
                  Category
                </th>
                <th className="py-3 px-4 font-bold tracking-wider text-[13px]">
                  Specifications
                </th>
              </tr>
            </thead>
            <tbody>
              {specifications.map((spec, idx) => (
                <tr
                  key={idx}
                  className={`border-b border-gray-200 transition-colors ${
                    idx % 2 === 0 ? 'bg-white' : 'bg-[#fafafa]'
                  }`}
                >
                  <td className="py-3.5 px-4 font-semibold text-gray-800 border-r border-gray-200 align-top">
                    {spec.category}
                  </td>
                  <td className="py-3.5 px-4 text-gray-600 leading-relaxed align-top">
                    {spec.value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="bg-white rounded border border-gray-200 p-8 text-center text-gray-500 text-sm">
          <p className="mb-2">There are no reviews yet for "{productTitle}".</p>
          <p className="text-xs text-gray-400">Be the first to review this product!</p>
        </div>
      )}
    </div>
  );
};

export default ProductSpecsTable;
