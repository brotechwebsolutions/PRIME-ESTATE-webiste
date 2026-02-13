
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

interface ImageGalleryProps {
  images: string[];
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="w-full aspect-[16/9] bg-gray-100 flex items-center justify-center rounded-3xl">
        <span className="text-gray-400">No images available</span>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative aspect-[16/9] overflow-hidden rounded-3xl shadow-lg group">
        <img
          src={images[activeIdx]}
          alt={`Property image ${activeIdx + 1}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {images.length > 1 && (
          <>
            <button
              onClick={() => setActiveIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1))}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur hover:bg-white text-gray-900 rounded-full shadow-lg transition-all active:scale-90"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={() => setActiveIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1))}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/90 backdrop-blur hover:bg-white text-gray-900 rounded-full shadow-lg transition-all active:scale-90"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </>
        )}

        <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-full text-white text-xs font-semibold">
          {activeIdx + 1} / {images.length}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
        {images.map((img, idx) => (
          <button
            key={idx}
            onClick={() => setActiveIdx(idx)}
            className={`relative shrink-0 w-24 md:w-32 aspect-video rounded-xl overflow-hidden transition-all ${
              activeIdx === idx ? 'ring-4 ring-blue-600 ring-offset-2' : 'opacity-60 hover:opacity-100'
            }`}
          >
            <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
