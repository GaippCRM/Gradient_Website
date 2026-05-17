import React from 'react';
import { MapPin, GraduationCap, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const InstitutionCard = ({ institution, isSelected, onClick }) => {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ y: -4 }}
      className={`p-6 rounded-2xl border transition-all cursor-pointer group relative overflow-hidden ${
        isSelected
          ? 'bg-white border-blue-500 shadow-[0_20px_50px_-20px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/10'
          : 'bg-white border-gray-100 hover:border-blue-200 hover:shadow-lg'
      }`}
    >
      {isSelected && (
        <div className="absolute top-0 left-0 w-1.5 h-full bg-blue-600" />
      )}
      <h3 className={`font-bold text-[16px] mb-1.5 transition-colors ${isSelected ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
        {institution.name}
      </h3>
      <div className="flex items-center gap-1.5 text-gray-400 text-[12px] font-medium mb-6 uppercase tracking-wider">
        <MapPin size={12} /> {institution.location}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t border-gray-50">
        <div className={`flex items-center gap-3 text-[13px] font-bold ${isSelected ? 'text-blue-600' : 'text-gray-900 group-hover:text-blue-600'}`}>
          <div className={`w-9 h-9 rounded-xl flex items-center justify-center border transition-colors ${
            isSelected ? 'bg-blue-600 border-blue-600' : 'bg-blue-50 border-blue-100/50 group-hover:bg-blue-600 group-hover:border-blue-600'
          }`}>
            <GraduationCap size={18} className={isSelected ? 'text-white' : 'text-blue-600 group-hover:text-white'} />
          </div>
          Browse all courses 
        </div>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
          isSelected ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-400 group-hover:bg-blue-600 group-hover:text-white'
        }`}>
          <ChevronRight size={18} />
        </div>
      </div>
    </motion.div>
  );
};

export default InstitutionCard;
