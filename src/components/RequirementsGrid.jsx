import React, { useState } from 'react';
import {
  FileText,
  Send,
  Printer,
  GraduationCap,
  Users,
  CircleDollarSign,
  LayoutList,
  ClipboardList
} from 'lucide-react';

const tabs = ['University', 'Tests', 'Visa'];

const requirements = {
  University: [
    { icon: Send,             label: "Passport" },
    { icon: GraduationCap,   label: "High school documents" },
    { icon: Printer,         label: "Work experience letter" },
    { icon: FileText,        label: "CV" },
    { icon: ClipboardList,   label: "Personal statement" },
  ],
  Tests: [
    { icon: LayoutList,      label: "UG/PG certificates" },
    { icon: Users,           label: "Reference" },
  ],
  Visa: [
    { icon: Send,             label: "Passport" },
    { icon: CircleDollarSign, label: "Proof of funds" },
  ]
};

const RequirementsGrid = () => {
  const [activeTab, setActiveTab] = useState('University');

  return (
    <div className="space-y-5 mt-10">
      <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
        <ClipboardList className="text-gray-900" size={24} />
        Basic requirements
      </h3>

      {/* Tabs */}
      <div className="flex gap-2 mb-2">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-5 py-1.5 rounded-full text-sm font-semibold border transition-colors ${
              activeTab === tab
                ? 'bg-blue-50 text-blue-600 border-blue-200'
                : 'bg-white text-gray-500 border-gray-200 hover:bg-gray-50'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {requirements[activeTab].map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between px-5 py-4 bg-white border border-gray-100 rounded-2xl hover:border-blue-100 transition-all group cursor-pointer"
          >
            <span className="text-[15px] font-medium text-gray-500 group-hover:text-blue-600 transition-colors">
              {item.label}
            </span>
            <item.icon size={20} className="text-gray-300 group-hover:text-blue-400 transition-colors shrink-0" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RequirementsGrid;
