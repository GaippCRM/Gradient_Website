import React, { useState } from 'react';
import { MapPin, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Tabs from './Tabs';
import OverviewTab from './OverviewTab';

const InstitutionDetails = ({ institution }) => {
  const [activeTab, setActiveTab] = useState('Overview');

  if (!institution) {
    return (
      <div className="flex-grow bg-white border border-gray-100 rounded-[32px] flex items-center justify-center p-20 text-center">
        <div>
          <Globe className="mx-auto text-gray-200 mb-6" size={64} />
          <h2 className="text-xl font-bold text-gray-900 mb-2">Select an Institution</h2>
          <p className="text-gray-500">Choose an institution from the list to view its information</p>
        </div>
      </div>
    );
  }

  const tabs = ['Overview', 'Subjects'];

  return (
    <div className="flex-grow">
      <AnimatePresence mode="wait">
        <motion.div
          key={institution.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="bg-white border border-gray-100 rounded-[40px] overflow-hidden shadow-[0_30px_100px_-50px_rgba(0,0,0,0.1)] sticky top-24"
        >
          {/* Banner */}
          <div className="h-64 md:h-80 overflow-hidden relative group">
            <img 
              src={institution.cover || 'https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&w=800&q=80'} 
              alt={institution.name} 
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>
          
          <div className="px-6 md:px-12 pb-12 relative z-20">
            {/* Logo & Identity */}
            <div className="relative -mt-12 flex flex-col md:flex-row items-center md:items-end gap-6 mb-10">
              <div className="p-2 rounded-[32px] bg-white shadow-2xl border border-gray-100/50 backdrop-blur-xl z-30">
                <img 
                  src={institution.logo || 'https://via.placeholder.com/100'} 
                  alt="logo" 
                  className="w-24 h-24 md:w-28 md:h-28 object-contain rounded-[24px]" 
                />
              </div>
              <div className="pb-2 text-center md:text-left z-30">
                <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-[1.2] tracking-tight mb-2">
                  {institution.name}
                </h1>
                <div className="flex items-center justify-center md:justify-start gap-2 text-blue-600 font-bold text-sm uppercase tracking-widest">
                  <MapPin size={16} /> {institution.location}
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <Tabs 
              tabs={tabs} 
              activeTab={activeTab} 
              onTabChange={setActiveTab} 
            />

            {/* Tab Content Rendering */}
            <AnimatePresence mode="wait">
              {activeTab === 'Overview' ? (
                <OverviewTab key="overview" institution={institution} />
              ) : (
                <motion.div
                  key="subjects"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  className="grid grid-cols-2 lg:grid-cols-3 gap-6 pt-6"
                >
                  {['Data Science', 'Business', 'Nursing', 'Artificial Intelligence', 'Engineering', 'Robotics'].map((sub) => (
                    <div 
                      key={sub} 
                      className="group p-8 rounded-3xl bg-gray-50 border border-transparent hover:border-blue-200 text-center transition-all cursor-pointer hover:bg-white hover:shadow-xl hover:shadow-blue-900/5"
                    >
                      <div className="text-gray-900 font-extrabold text-sm mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">
                        {sub}
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default InstitutionDetails;
