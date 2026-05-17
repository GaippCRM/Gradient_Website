import React from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex border-b border-gray-100 mb-8 overflow-x-auto no-scrollbar">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-8 py-4 text-sm font-bold transition-all relative ${
            activeTab === tab ? 'text-blue-600' : 'text-gray-400 hover:text-gray-600'
          }`}
        >
          {tab}
          {activeTab === tab && (
            <motion.div layoutId="tabActive" className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full" />
          )}
        </button>
      ))}
    </div>
  );
};

export default Tabs;
