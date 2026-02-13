
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Target, Users, Award, Building2, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    { icon: <Shield className="w-8 h-8" />, title: 'Transparency', desc: 'Full disclosure on every property detail and pricing structure.' },
    { icon: <Award className="w-8 h-8" />, title: 'Quality', desc: 'We only list properties that meet our high standards for living.' },
    { icon: <Target className="w-8 h-8" />, title: 'Customer First', desc: 'Our search tools and support team are built around your needs.' },
  ];

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://picsum.photos/1920/1080?random=about" 
            alt="Real Estate" 
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6">Revolutionizing <span className="text-blue-500">Property</span> Discovery</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              EstatePro was founded on a simple mission: to make finding your next home as exciting and effortless as living in it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="relative -mt-16 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: 'Properties Sold', value: '1,500+' },
            { label: 'Happy Clients', value: '5,000+' },
            { label: 'Agents Ready', value: '120+' },
            { label: 'Cities Covered', value: '25+' },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-gray-100 text-center">
              <p className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Vision & Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-8">Our Journey to Excellence</h2>
            <div className="space-y-6 text-lg text-gray-600">
              <p>
                Started in 2018, EstatePro emerged from the frustration of traditional real estate hurdles. We saw an industry stuck in the past and decided to build a platform that leverages modern technology for a more human experience.
              </p>
              <p>
                Today, we are more than just a listing site. We are a community of homeowners, seekers, and experts working together to build better living experiences. Every flat, plot, and room we list is a potential new chapter for someone.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {values.map((val, i) => (
              <div key={i} className="flex gap-6 p-8 bg-gray-50 rounded-[40px] border border-gray-100 hover:bg-white hover:shadow-lg transition-all">
                <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  {val.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{val.title}</h3>
                  <p className="text-gray-600">{val.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section Placeholder */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Meet the Visionaries</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Behind EstatePro is a diverse team of tech enthusiasts and real estate veterans dedicated to your success.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-12">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center group">
                <div className="relative mb-6 rounded-[40px] overflow-hidden aspect-square shadow-lg">
                  <img src={`https://picsum.photos/400/400?random=team${i}`} alt="Team Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Expert Agent {i}</h3>
                <p className="text-blue-600 font-medium">Real Estate Strategy</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
