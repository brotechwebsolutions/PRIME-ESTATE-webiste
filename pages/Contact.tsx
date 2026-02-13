
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { leadService } from '../services/api';
import { Lead } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<Lead>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await leadService.create(formData);
      setSubmitted(true);
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const contactOptions = [
    { icon: <Phone className="w-6 h-6" />, title: 'Call Us', detail: '+1 (555) 123-4567', sub: 'Available Mon-Fri, 9am-6pm' },
    { icon: <Mail className="w-6 h-6" />, title: 'Email Us', detail: 'hello@estatepro.com', sub: "We'll reply within 24 hours" },
    { icon: <MapPin className="w-6 h-6" />, title: 'Visit Us', detail: '123 Real Estate Ave', sub: 'Luxury District, NY 10001' },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">Get in Touch</h1>
          <p className="text-lg text-gray-600">
            Have questions about a property or need help with your search? Our team of real estate experts is here to assist you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Info Side */}
          <div className="lg:col-span-2 space-y-8">
            {contactOptions.map((opt, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-start gap-5 p-6 bg-white rounded-3xl border border-gray-100 shadow-sm"
              >
                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
                  {opt.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">{opt.title}</h3>
                  <p className="text-blue-600 font-semibold mb-1">{opt.detail}</p>
                  <p className="text-sm text-gray-500">{opt.sub}</p>
                </div>
              </motion.div>
            ))}

            <div className="bg-blue-600 p-8 rounded-[40px] text-white shadow-xl shadow-blue-100">
              <h3 className="text-2xl font-bold mb-4">Follow Our Updates</h3>
              <p className="text-blue-100 mb-6">Stay informed about new listings and real estate trends in your area.</p>
              <div className="flex bg-white/10 p-2 rounded-2xl border border-white/20">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-transparent border-none focus:ring-0 text-white placeholder-blue-200 w-full px-4"
                />
                <button className="bg-white text-blue-600 p-3 rounded-xl hover:bg-blue-50 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-3">
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white p-12 rounded-[40px] text-center shadow-sm border border-gray-100 flex flex-col items-center justify-center h-full"
              >
                <div className="w-24 h-24 bg-green-50 text-green-500 rounded-full flex items-center justify-center mb-8">
                  <CheckCircle className="w-12 h-12" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Message Sent!</h2>
                <p className="text-gray-600 text-lg mb-8 max-w-sm">
                  Thank you for reaching out. One of our experts will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 bg-gray-100 text-gray-900 font-bold rounded-xl hover:bg-gray-200 transition-all"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white p-8 md:p-12 rounded-[40px] shadow-sm border border-gray-100"
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Send an Enquiry</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Full Name</label>
                      <input
                        required
                        type="text"
                        className="w-full px-4 py-3 bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-semibold text-gray-700 ml-1">Phone Number</label>
                      <input
                        required
                        type="tel"
                        className="w-full px-4 py-3 bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                    <input
                      required
                      type="email"
                      className="w-full px-4 py-3 bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 ml-1">Your Message</label>
                    <textarea
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-50 border-gray-100 rounded-xl focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                      placeholder="Tell us about what you are looking for..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    ></textarea>
                  </div>
                  {error && <p className="text-red-500 text-sm">{error}</p>}
                  <button
                    disabled={loading}
                    type="submit"
                    className="w-full py-4 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold rounded-2xl transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-3 active:scale-[0.98]"
                  >
                    {loading ? (
                      <div className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Enquiry
                      </>
                    )}
                  </button>
                </form>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
