
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Bed, Bath, Square, ChevronRight } from 'lucide-react';
import { Property, PropertyType } from '../types';

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const PropertyCard: React.FC<PropertyCardProps> = ({ property, index = 0 }) => {
  const { _id, title, price, location, type, images, status } = property;

  const typeStyles: Record<PropertyType, string> = {
    [PropertyType.FLAT]: 'bg-blue-100 text-blue-700',
    [PropertyType.PLOT]: 'bg-green-100 text-green-700',
    [PropertyType.ROOM]: 'bg-purple-100 text-purple-700',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <Link to={`/property/${_id}`} className="block relative overflow-hidden aspect-[4/3]">
        <img
          src={images[0] || 'https://picsum.photos/800/600?random=' + _id}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider ${typeStyles[type]}`}>
            {type}
          </span>
          {status === 'sold' && (
            <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-red-100 text-red-700">
              Sold
            </span>
          )}
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur px-4 py-2 rounded-xl shadow-lg inline-block">
            <p className="text-xl font-bold text-blue-600">
              ${price.toLocaleString()}
            </p>
          </div>
        </div>
      </Link>

      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {title}
        </h3>
        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin className="w-4 h-4 mr-1 shrink-0" />
          <span className="line-clamp-1">{location}</span>
        </div>

        <div className="flex items-center justify-between border-t border-gray-50 pt-4 mt-auto">
          <div className="flex gap-4">
            <div className="flex items-center text-gray-400 text-xs">
              <Bed className="w-4 h-4 mr-1" />
              <span>3 Beds</span>
            </div>
            <div className="flex items-center text-gray-400 text-xs">
              <Square className="w-4 h-4 mr-1" />
              <span>1,200 sqft</span>
            </div>
          </div>
          <Link
            to={`/property/${_id}`}
            className="flex items-center text-blue-600 text-sm font-semibold hover:translate-x-1 transition-transform"
          >
            Details <ChevronRight className="w-4 h-4 ml-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PropertyCard;
