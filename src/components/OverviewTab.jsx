import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Calendar, Clock } from 'lucide-react';

const OverviewTab = ({ institution }) => {
  return (
    <motion.div
      key="overview"
      initial={{ opacity: 0, x: 10 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -10 }}
      className="space-y-10 pb-10"
    >
      <section>
        <h2 className="text-lg font-extrabold text-gray-900 mb-4 flex items-center gap-3">
          <div className="w-1 h-6 bg-blue-600 rounded-full" />
          About the University
        </h2>
        <p className="text-gray-500 text-[15px] leading-relaxed font-medium">
          {institution.description || 'No description available'}
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gray-50/80 p-6 rounded-3xl border border-gray-100">
          <h3 className="text-[14px] font-extrabold text-gray-900 mb-4 flex items-center gap-2">
             <Building2 size={16} className="text-blue-500" /> Campus details
          </h3>
          <ul className="space-y-3">
            {(institution.campusDetails || []).map((detail, idx) => (
              <li key={idx} className="flex items-center gap-3 text-gray-600 text-[13px] font-medium">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-sm shadow-blue-200"></div>
                {detail}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-gray-50/80 p-6 rounded-3xl border border-gray-100">
          <h3 className="text-[14px] font-extrabold text-gray-900 mb-4 flex items-center gap-2">
             <Calendar size={16} className="text-blue-500" /> Upcoming Intakes
          </h3>
          <div className="flex flex-wrap gap-2">
            {(institution.intakes || []).map((intake, idx) => (
              <span key={idx} className="bg-white border border-blue-100 px-4 py-2 rounded-xl text-blue-700 text-[13px] font-bold shadow-sm inline-block">
                {intake}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 bg-blue-600/5 p-8 rounded-[32px] border border-blue-100/50">
          <h3 className="text-[14px] font-extrabold text-gray-900 mb-5 flex items-center gap-2">
             <Clock size={16} className="text-blue-600" /> Mode of Study
          </h3>
          <div className="flex flex-wrap gap-3">
            {['Full Time', 'Part Time'].map((mode, idx) => (
              <button 
                key={idx} 
                className={`px-8 py-3 rounded-2xl text-sm font-bold shadow-sm transition-all border ${
                  (institution.modes || []).includes(mode)
                    ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-200'
                    : 'bg-white text-gray-500 border-gray-200 hover:border-blue-200 hover:text-blue-600'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OverviewTab;
