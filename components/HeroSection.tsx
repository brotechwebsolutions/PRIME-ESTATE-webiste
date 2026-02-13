
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Search, MapPin, Building2 } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/properties?search=${encodeURIComponent(query)}`);
    }
  };

  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-blue-50/50 rounded-l-[100px] hidden lg:block"></div>
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold mb-6">
              Modern Living Spaces
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight mb-6">
              Find Your <span className="text-blue-600">Dream</span> Property
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-lg">
              Explore our wide range of premium flats, spacious plots, and cozy rooms tailored to your lifestyle and budget.
            </p>

            <form
              onSubmit={handleSearch}
              className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col md:flex-row gap-2 border border-gray-100 max-w-2xl"
            >
              <div className="flex-1 flex items-center px-4 py-3 bg-gray-50 rounded-xl">
                <Search className="text-gray-400 mr-3 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Location, property type, keywords..."
                  className="bg-transparent border-none focus:ring-0 w-full text-gray-700"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-lg shadow-blue-200 active:scale-95"
              >
                Search Now
              </button>
            </form>

            <div className="mt-10 flex gap-8 items-center">
              <div>
                <p className="text-3xl font-bold text-gray-900">12K+</p>
                <p className="text-sm text-gray-500">Premium Properties</p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">5K+</p>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
              <div className="h-10 w-px bg-gray-200"></div>
              <div>
                <p className="text-3xl font-bold text-gray-900">20+</p>
                <p className="text-sm text-gray-500">Global Cities</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden shadow-2xl">
              <img
                src="https://picsum.photos/1000/1200?random=hero"
                alt="Luxury Home"
                className="w-full h-auto object-cover"
              />
            </div>
            
            {/* Floating Card */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
              className="absolute -bottom-10 -left-10 bg-white p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-gray-50"
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Building2 className="text-green-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500">New Listing Available</p>
                <p className="text-sm font-bold text-gray-900">Penthouse in Manhattan</p>
              </div>
            </motion.div>

            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 3, delay: 0.5 }}
              className="absolute top-10 -right-5 bg-white p-5 rounded-2xl shadow-xl z-20 flex items-center gap-4 border border-gray-50"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <MapPin className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <p className="text-xs text-gray-500">Verified Sellers</p>
                <p className="text-sm font-bold text-gray-900">100% Secure Deals</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
