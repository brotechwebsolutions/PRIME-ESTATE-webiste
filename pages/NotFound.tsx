
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="text-center max-w-lg">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <h1 className="text-[150px] font-black text-blue-100 leading-none select-none">404</h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-bold text-gray-900 bg-white/50 backdrop-blur px-6 py-2 rounded-2xl">Page Not Found</span>
            </div>
          </div>
        </div>
        <p className="text-gray-600 text-lg mb-10 leading-relaxed">
          The property or page you're looking for might have been moved, sold, or doesn't exist anymore. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link to="/" className="flex items-center gap-2 px-8 py-3 bg-blue-600 text-white font-bold rounded-2xl shadow-xl shadow-blue-100 hover:bg-blue-700 transition-all active:scale-95 w-full sm:w-auto">
            <Home className="w-5 h-5" />
            Home Page
          </Link>
          <Link to="/properties" className="flex items-center gap-2 px-8 py-3 bg-white border border-gray-200 text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition-all active:scale-95 w-full sm:w-auto">
            <Search className="w-5 h-5" />
            Search Properties
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
