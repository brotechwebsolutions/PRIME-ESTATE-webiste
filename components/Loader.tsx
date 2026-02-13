
import React from 'react';

export const PageLoader: React.FC = () => (
  <div className="fixed inset-0 bg-white z-[9999] flex items-center justify-center">
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 border-4 border-blue-100 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="mt-4 text-gray-500 font-medium animate-pulse">Loading amazing properties...</p>
    </div>
  </div>
);

export const PropertySkeleton: React.FC = () => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
    <div className="aspect-[4/3] bg-gray-200 animate-pulse"></div>
    <div className="p-6 space-y-4">
      <div className="h-6 bg-gray-200 rounded animate-pulse w-3/4"></div>
      <div className="h-4 bg-gray-200 rounded animate-pulse w-1/2"></div>
      <div className="flex justify-between items-center pt-4">
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/3"></div>
        <div className="h-4 bg-gray-200 rounded animate-pulse w-1/4"></div>
      </div>
    </div>
  </div>
);

export const SkeletonGrid: React.FC<{ count?: number }> = ({ count = 6 }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {Array.from({ length: count }).map((_, i) => (
      <PropertySkeleton key={i} />
    ))}
  </div>
);
