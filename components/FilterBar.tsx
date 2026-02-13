
import React from 'react';
import { Search, SlidersHorizontal } from 'lucide-react';
import { PROPERTY_TYPES, PRICE_RANGES } from '../constants';

interface FilterBarProps {
  search: string;
  setSearch: (val: string) => void;
  type: string;
  setType: (val: string) => void;
  priceRange: string;
  setPriceRange: (val: string) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({
  search, setSearch, type, setType, priceRange, setPriceRange
}) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-10">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Search */}
        <div className="flex-1 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search by title, location..."
            className="w-full pl-12 pr-4 py-3 bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          {/* Type Filter */}
          <div className="min-w-[160px]">
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
            >
              {PROPERTY_TYPES.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>

          {/* Price Range */}
          <div className="min-w-[200px]">
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="w-full px-4 py-3 bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none cursor-pointer"
            >
              {PRICE_RANGES.map((range) => (
                <option key={range.label} value={range.label}>{range.label}</option>
              ))}
            </select>
          </div>
          
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold rounded-xl transition-colors">
            <SlidersHorizontal className="w-4 h-4" />
            More
          </button>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
