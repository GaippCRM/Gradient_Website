import React from 'react';
import { Building2 } from 'lucide-react';

const UniversitiesList = ({ universities }) => {
  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
          <Building2 className="text-gray-900" size={24} />
          Best universities in the UK
        </h3>
        <button className="text-[15px] font-semibold text-purple-600 hover:text-purple-700 transition-colors whitespace-nowrap">
          Show all →
        </button>
      </div>

      {/* Subtitle */}
      <p className="text-[15px] text-gray-500 leading-relaxed">
        In the UK, you'll find numerous globally-ranked universities, with excellent infrastructure, research facilities and a welcoming environment.
      </p>

      {/* University Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {universities.map((uni, index) => (
          <div
            key={index}
            className="p-5 bg-white border border-gray-100 rounded-2xl hover:border-blue-100 hover:shadow-sm transition-all cursor-pointer"
          >
            {/* Logo / Placeholder */}
            <div className="mb-4">
              {uni.logo ? (
                <img
                  src={uni.logo}
                  alt={uni.name}
                  className="w-10 h-10 object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
              ) : (
                <div
                  style={{
                    width: 0,
                    height: 0,
                    borderLeft: '14px solid transparent',
                    borderRight: '14px solid transparent',
                    borderTop: '22px solid #4B2E83',
                    transform: 'rotate(-15deg)',
                  }}
                />
              )}
              {/* Fallback for broken logo images */}
              <div
                style={{
                  display: 'none',
                  width: 0,
                  height: 0,
                  borderLeft: '14px solid transparent',
                  borderRight: '14px solid transparent',
                  borderTop: '22px solid #4B2E83',
                  transform: 'rotate(-15deg)',
                }}
              />
            </div>

            {/* Name & Location */}
            <h4 className="font-semibold text-gray-800 text-[15px] leading-snug mb-1">
              {uni.name}
            </h4>
            <p className="text-[14px] text-gray-400">{uni.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UniversitiesList;
