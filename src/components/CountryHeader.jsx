import React from 'react';

const CountryHeader = ({ flag, name, universityCount, buttonLabel = 'Explore universities' }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-center py-6 border-b border-gray-100 mb-8 gap-4">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 shadow-sm border border-gray-100">
          <img src={flag} alt={`${name} flag`} className="w-full h-full object-cover" />
        </div>
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">{name}</h2>
          <p className="text-blue-600 font-medium text-sm">{universityCount} Universities</p>
        </div>
      </div>

      <button className="px-6 py-2.5 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 hover:-translate-y-0.5 active:scale-95">
        {buttonLabel}
      </button>
    </div>
  );
};

export default CountryHeader;
