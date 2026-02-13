
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Building2, Map, LayoutGrid } from 'lucide-react';
import HeroSection from '../components/HeroSection';
import PropertyCard from '../components/PropertyCard';
import { SkeletonGrid } from '../components/Loader';
import { propertyService } from '../services/api';
import { Property } from '../types';

const Home: React.FC = () => {
  const [featured, setFeatured] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProperties = async () => {
      try {
        const data = await propertyService.getAll();
        setFeatured(data.slice(0, 6));
      } catch (error) {
        console.error("Error fetching featured properties:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProperties();
  }, []);

  const categories = [
    { title: 'Luxury Flats', icon: <Building2 className="w-8 h-8 text-blue-600" />, count: '1,200+', color: 'bg-blue-50', link: '/properties?type=flat' },
    { title: 'Spacious Plots', icon: <Map className="w-8 h-8 text-green-600" />, count: '850+', color: 'bg-green-50', link: '/properties?type=plot' },
    { title: 'Cozy Rooms', icon: <LayoutGrid className="w-8 h-8 text-purple-600" />, count: '2,400+', color: 'bg-purple-50', link: '/properties?type=room' },
  ];

  return (
    <div className="space-y-24 pb-24">
      <HeroSection />

      {/* Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Explore by Category</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Discover properties tailored to your specific needs across our most popular categories.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`${cat.color} p-8 rounded-3xl border border-transparent hover:border-white hover:shadow-xl transition-all group`}
            >
              <div className="mb-6 p-4 bg-white rounded-2xl inline-block shadow-sm">
                {cat.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{cat.title}</h3>
              <p className="text-gray-500 mb-6">{cat.count} listings available</p>
              <Link to={cat.link} className="flex items-center text-gray-900 font-bold group-hover:text-blue-600 transition-colors">
                Browse Category <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Properties */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-gray-600">Handpicked properties just for you in premium locations.</p>
          </div>
          <Link to="/properties" className="px-6 py-3 bg-white border border-gray-200 hover:border-blue-600 text-gray-900 hover:text-blue-600 font-bold rounded-full transition-all flex items-center">
            View All Properties <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>

        {loading ? (
          <SkeletonGrid count={6} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featured.map((prop, idx) => (
              <PropertyCard key={prop._id} property={prop} index={idx} />
            ))}
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-blue-600 rounded-[40px] p-8 md:p-16 overflow-hidden">
          <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-500 rounded-l-full hidden lg:block opacity-20"></div>
          <div className="relative z-10 lg:flex items-center justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">Ready to find your new home?</h2>
              <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                Our property experts are standing by to help you find exactly what you're looking for. From initial search to key delivery, we've got you covered.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-2xl font-bold shadow-xl hover:bg-gray-50 transition-all active:scale-95">
                  Contact an Expert
                </Link>
                <Link to="/about" className="bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-2xl font-bold hover:bg-blue-800 transition-all active:scale-95">
                  Learn More
                </Link>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="w-80 h-80 bg-blue-500/20 rounded-full flex items-center justify-center animate-pulse">
                <Building2 className="w-40 h-40 text-blue-100/50" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
