import React from 'react';
import { Search, Filter, Landmark, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import InstitutionCard from './InstitutionCard';

const InstitutionList = ({ institutions, selectedId, onSelect, searchQuery, onSearchChange, totalFound }) => {
  return (
    <div className="lg:w-[400px] shrink-0 flex flex-col h-full">
      {/* Search and Filter count */}
      <div className="sticky top-0 bg-[#f8fafc] z-20 pb-4">
        <div className="relative group mb-6">
          <input 
            type="text" 
            placeholder="Search..." 
            className="w-full bg-white border border-gray-200 rounded-2xl py-3 pl-12 pr-4 text-sm focus:ring-4 focus:ring-blue-50 focus:border-blue-400 outline-none transition-all shadow-sm"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
        </div>
        
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-2">
            <h2 className="text-[15px] font-bold text-gray-900">{totalFound} Institutions found</h2>
          </div>
          <button className="flex items-center gap-2 bg-white border border-gray-100 px-4 py-2 rounded-xl text-xs font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm active:scale-95">
            <Filter size={14} className="text-blue-600" /> Filter
          </button>
        </div>
      </div>

      {/* Scrollable list */}
      <div className="flex-grow space-y-4 overflow-y-auto no-scrollbar pr-2 lg:max-h-[calc(100vh-280px)]">
        {institutions.length > 0 ? (
          institutions.map((inst) => (
            <InstitutionCard
              key={inst.id}
              institution={inst}
              isSelected={selectedId === inst.id}
              onClick={() => onSelect(inst.id)}
            />
          ))
        ) : (
          <div className="text-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
            <Landmark className="mx-auto text-gray-300 mb-4" size={48} />
            <p className="text-gray-500 font-medium">No institutions found</p>
          </div>
        )}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 mt-8 py-4">
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-100 text-gray-400 hover:bg-gray-50 hover:text-blue-600 transition-all"><ChevronLeft size={16} /></button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-blue-600 text-white font-bold text-xs shadow-lg shadow-blue-100">1</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-100 text-gray-500 font-bold text-xs hover:bg-gray-50 hover:text-blue-600 transition-all">2</button>
        <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-100 text-gray-400 hover:bg-gray-50 hover:text-blue-600 transition-all"><ChevronRight size={16} /></button>
      </div>
    </div>
  );
};

export default InstitutionList;
