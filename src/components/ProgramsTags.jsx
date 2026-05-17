import React from 'react';
import { GraduationCap } from 'lucide-react';

const ProgramsTags = ({ programs }) => {
  return (
    <div className="space-y-4 mt-10">
      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <GraduationCap className="text-gray-900" size={24} />
        Popular programs
      </h3>
      <p className="text-[15px] text-gray-500 leading-relaxed max-w-2xl">
        The vast range of programs that you can access in the UK will surely elevate your career ambitions. And these courses are definitely going to prepare you for high-income jobs. From business to arts, and engineering, you've got a lot of options to choose from.
      </p>
      <div className="flex flex-wrap gap-2 pt-2">
        {programs.map((program, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white border border-gray-200 text-gray-500 rounded-full text-[14px] font-normal hover:border-blue-300 hover:text-blue-600 transition-all"
          >
            {program}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProgramsTags;
