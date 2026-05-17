import React from 'react';

const stats = [
  { id: 1, value: "500+", label: "Institutions" },
  { id: 2, value: "50,000+", label: "Courses" },
  { id: 3, value: "5+", label: "Destinations" },
  { id: 4, value: "20+", label: "Years of Experience" },
];

const Stats = () => {
  return (
    <div className="py-12 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x-0 md:divide-x md:divide-gray-100">
          {stats.map((stat, index) => (
            <div key={stat.id} className="flex flex-col justify-center items-center py-4">
              <span className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-2">
                {stat.value}
              </span>
              <span className="text-base text-gray-500 font-medium uppercase tracking-wide">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
