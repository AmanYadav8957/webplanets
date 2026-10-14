import React from 'react';
import type { BrandId } from './types';
import { brandSetupConfigs } from './brandSetupData';

interface BrandSwitcherProps {
  activeBrand: BrandId;
  onSelectBrand?: (brand: BrandId) => void;
}

const BrandSwitcher: React.FC<BrandSwitcherProps> = ({ activeBrand, onSelectBrand }) => {
  const brandIds: BrandId[] = ['hp', 'canon', 'brother', 'epson'];

  return (
    <div className="mt-20 pt-8 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-4">
      <div className="text-[13px] text-gray-500">
        Select another brand for printer setup:
      </div>
      <div className="flex flex-wrap gap-2.5">
        {brandIds.map((b) => (
          <button
            key={b}
            type="button"
            onClick={() => onSelectBrand?.(b)}
            className={`px-3.5 py-1.5 rounded-full text-[12.5px] font-semibold uppercase tracking-wider border transition-all cursor-pointer ${
              activeBrand === b
                ? 'bg-lightBlue text-white border-lightBlue shadow-sm'
                : 'bg-gray-50 text-gray-600 border-gray-200 hover:bg-gray-100 hover:text-gray-900'
            }`}
          >
            {brandSetupConfigs[b].brandName} Setup
          </button>
        ))}
      </div>
    </div>
  );
};

export default BrandSwitcher;
