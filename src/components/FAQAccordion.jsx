import React, { useState } from 'react';
import { ChevronDown, Lightbulb } from 'lucide-react';

const FAQAccordion = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  if (!faqs) return null;

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-6 mt-10">
      <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <Lightbulb className="text-gray-900" size={24} />
        Frequently asked questions
      </h3>
      <div className="space-y-2">
        {faqs.map((faq, index) => (
          <div 
            key={index} 
            className={`border rounded-2xl transition-all duration-300 ${activeIndex === index ? 'bg-white border-gray-100 shadow-sm' : 'border-gray-100 bg-white hover:border-blue-100'}`}
          >
            <button
              className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
              onClick={() => toggleAccordion(index)}
            >
              <span className={`font-semibold text-[16px] transition-colors ${activeIndex === index ? 'text-gray-900' : 'text-gray-700 group-hover:text-blue-600'}`}>
                {faq.question}
              </span>
              <div className={`flex-shrink-0 transition-transform duration-300 ${activeIndex === index ? 'rotate-180 text-gray-900' : 'text-gray-400 group-hover:text-blue-500'}`}>
                <ChevronDown size={20} />
              </div>
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-96 opacity-100 pb-5' : 'max-h-0 opacity-0'}`}
            >
              <div className="px-6 text-[15px] text-gray-600 leading-relaxed font-normal">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
