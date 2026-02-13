
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Search } from 'lucide-react';
import PropertyCard from '../components/PropertyCard';
import FilterBar from '../components/FilterBar';
import { SkeletonGrid } from '../components/Loader';
import { propertyService } from '../services/api';
import { Property, PropertyType } from '../types';
import { PRICE_RANGES } from '../constants';

const Properties: React.FC = () => {
  const queryParams = new URLSearchParams(useLocation().search);
  
  const [properties, setProperties] = useState<Property[]>([]);
  const [filteredProperties, setFilteredProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  // Filters state
  const [search, setSearch] = useState(queryParams.get('search') || '');
  const [type, setType] = useState(queryParams.get('type') || '');
  const [priceRange, setPriceRange] = useState('Any Price');

  useEffect(() => {
    const loadProperties = async () => {
      try {
        const data = await propertyService.getAll();
        setProperties(data);
      } catch (err) {
        console.error("Failed to load properties:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProperties();
  }, []);

  useEffect(() => {
    let result = [...properties];

    // Filter by type
    if (type) {
      result = result.filter(p => p.type === type);
    }

    // Filter by search query
    if (search) {
      const q = search.toLowerCase();
      result = result.filter(p => 
        p.title.toLowerCase().includes(q) || 
        p.location.toLowerCase().includes(q)
      );
    }

    // Filter by price
    const rangeObj = PRICE_RANGES.find(r => r.label === priceRange);
    if (rangeObj) {
      result = result.filter(p => p.price >= rangeObj.min && p.price <= rangeObj.max);
    }

    setFilteredProperties(result);
  }, [properties, type, search, priceRange]);

  return (
    <div className="bg-gray-50/50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">Explore Properties</h1>
          <p className="text-gray-500">Discover over {properties.length} available listings</p>
        </header>

        <FilterBar 
          search={search} 
          setSearch={setSearch} 
          type={type} 
          setType={setType}
          priceRange={priceRange}
          setPriceRange={setPriceRange}
        />

        {loading ? (
          <SkeletonGrid count={9} />
        ) : (
          <>
            {filteredProperties.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProperties.map((prop, idx) => (
                  <PropertyCard key={prop._id} property={prop} index={idx % 9} />
                ))}
              </div>
            ) : (
              <div className="text-center py-20 bg-white rounded-[40px] shadow-sm border border-gray-100">
                <div className="mb-6 flex justify-center">
                  <div className="p-6 bg-gray-50 rounded-full">
                    <Search className="w-12 h-12 text-gray-300" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No matching properties</h3>
                <p className="text-gray-500 max-w-md mx-auto">
                  We couldn't find any properties matching your current filters. Try broadening your search or resetting filters.
                </p>
                <button 
                  onClick={() => { setSearch(''); setType(''); setPriceRange('Any Price'); }}
                  className="mt-8 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-all shadow-lg shadow-blue-100"
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Properties;
