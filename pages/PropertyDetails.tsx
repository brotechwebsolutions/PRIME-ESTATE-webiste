
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, Phone, Mail, User, Info, CheckCircle2, 
  Share2, Heart, ArrowLeft, Calendar, ShieldCheck 
} from 'lucide-react';
import { propertyService } from '../services/api';
import { Property } from '../types';
import ImageGallery from '../components/ImageGallery';
import { PageLoader } from '../components/Loader';

const PropertyDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const [isLiked, setIsLiked] = useState(false);

  useEffect(() => {
    if (!id) return;
    const loadProperty = async () => {
      try {
        const data = await propertyService.getById(id);
        setProperty(data);
      } catch (err) {
        console.error("Failed to load property details:", err);
      } finally {
        setLoading(false);
      }
    };
    loadProperty();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) return <PageLoader />;
  if (!property) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
        <Link to="/properties" className="text-blue-600 font-bold hover:underline">Back to All Properties</Link>
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50/50 min-h-screen pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb & Actions */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <Link to="/properties" className="flex items-center text-gray-500 hover:text-blue-600 transition-colors font-medium">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Properties
          </Link>
          <div className="flex gap-4">
            <button 
              onClick={() => setIsLiked(!isLiked)}
              className={`p-3 rounded-full shadow-sm transition-all border ${isLiked ? 'bg-red-50 text-red-500 border-red-100' : 'bg-white text-gray-400 border-gray-100'}`}
            >
              <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
            </button>
            <button className="p-3 bg-white text-gray-400 border border-gray-100 rounded-full shadow-sm hover:text-blue-600 transition-all">
              <Share2 className="w-5 h-5" />
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <ImageGallery images={property.images} />
              
              <div className="mt-10 space-y-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <span className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                      {property.type}
                    </span>
                    <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight">
                      {property.title}
                    </h1>
                    <div className="flex items-center text-gray-500 mt-4 text-lg">
                      <MapPin className="w-6 h-6 mr-2 text-blue-500" />
                      {property.location}
                    </div>
                  </div>
                  <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100 text-right">
                    <p className="text-sm text-gray-500 font-medium mb-1">Total Price</p>
                    <p className="text-4xl font-extrabold text-blue-600">${property.price.toLocaleString()}</p>
                  </div>
                </div>
              </div>
            </section>

            <section className="bg-white p-8 md:p-10 rounded-[40px] shadow-sm border border-gray-50 space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Info className="w-6 h-6 mr-3 text-blue-600" /> Description
                </h3>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {property.description || "No description provided for this property yet. Please contact the owner for detailed information about this listing."}
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <ShieldCheck className="w-6 h-6 mr-3 text-blue-600" /> Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {(property.features && property.features.length > 0 ? property.features : ['Fully Verified', 'Prime Location', '24/7 Security', 'Spacious Layout', 'High Speed Internet', 'Green Surroundings']).map((feature, i) => (
                    <div key={i} className="flex items-center p-4 bg-gray-50 rounded-2xl border border-gray-100">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 shrink-0" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Sidebar - Sticky */}
          <div className="space-y-8">
            <div className="sticky top-24 space-y-8">
              {/* Owner Info & Contact */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white p-8 rounded-[40px] shadow-xl shadow-blue-50 border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Listed by Owner</h3>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-gray-900">{property.ownerName || 'Property Owner'}</p>
                    <p className="text-sm text-gray-500 flex items-center">
                      <ShieldCheck className="w-3 h-3 mr-1 text-green-500" /> Verified Seller
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <a
                    href={`tel:${property.ownerContact}`}
                    className="flex items-center justify-center gap-3 w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-100 active:scale-95"
                  >
                    <Phone className="w-5 h-5" />
                    Call Now
                  </a>
                  <button
                    className="flex items-center justify-center gap-3 w-full py-4 bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-2xl transition-all active:scale-95"
                  >
                    <Mail className="w-5 h-5" />
                    Send Message
                  </button>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-50 text-center">
                  <p className="text-sm text-gray-400 mb-2">Reference ID: {property._id.slice(-8).toUpperCase()}</p>
                  <p className="text-xs text-gray-400 flex items-center justify-center">
                    <Calendar className="w-3 h-3 mr-1" /> Listed on {new Date(property.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </motion.div>

              {/* Safety Tips */}
              <div className="bg-amber-50 p-6 rounded-3xl border border-amber-100">
                <h4 className="text-amber-800 font-bold mb-2 flex items-center">
                  <ShieldCheck className="w-5 h-5 mr-2" /> Safety Tip
                </h4>
                <p className="text-sm text-amber-700 leading-relaxed">
                  Always inspect the property in person before making any payments. LuxeEstate verifies listings but encourages user diligence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
