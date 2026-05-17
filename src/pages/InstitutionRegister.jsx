import React, { useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const InstitutionRegister = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const instRegisterSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://gradient-edu.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Institution Partner Signup",
          "item": "https://gradient-edu.com/institution-register"
        }
      ]
    }
  ];

  return (
    <div className="bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/70 min-h-screen pt-16 pb-24 font-sans relative overflow-hidden">
      <SEO 
        title="University & College Onboarding Partner Form | Gradient Edu"
        description="Partner with Gradient Edu to expand your international reach and receive highly qualified student applications. Complete the onboarding enquiry form."
        schemaMarkup={instRegisterSchemas}
      />

      {/* Subtle Graph Paper Background overlay matching site theme */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', backgroundSize: '30px 30px' }}
      />

      <div className="max-w-[1186px] mx-auto px-4 sm:px-6 flex flex-col items-center relative z-10">

        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-[#111827] text-[28px] md:text-[32px] font-bold tracking-wide uppercase mb-8"
        >
          Institution Signup Form
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-xl p-8 md:p-10 shadow-xl border border-gray-100 w-full max-w-[950px]"
        >
          <h2 className="text-[20px] font-bold text-[#111827] mb-2 tracking-tight">Institute Information</h2>
          <p className="text-[#4b5563] text-[15px] mb-8">
            Please fill out the form provided, and a member of our partner relations team will contact you shortly.
          </p>

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

              {/* Row 1 */}
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Name *"
                  className="w-full border border-gray-200 rounded p-[14px] text-[13px] font-medium placeholder-[#9ca3af] focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Enter Contact Email *"
                  className="w-full border border-gray-200 rounded p-[14px] text-[13px] font-medium placeholder-[#9ca3af] focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                />
              </div>

              {/* Row 2 */}
              <div className="relative flex items-center border border-gray-200 rounded px-4 py-[14px] bg-white cursor-pointer hover:border-blue-400 transition-colors">
                <img src="https://flagcdn.com/w20/gb.png" alt="UK Flag" className="w-[18px] h-[13px] mr-3 object-cover rounded-sm shadow-sm" />
                <span className="text-[13px] text-[#111827] font-semibold">+44 | United Kingdom</span>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Name of the Institution/University *"
                  className="w-full border border-gray-200 rounded p-[14px] text-[13px] font-medium placeholder-[#9ca3af] focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                />
              </div>

              {/* Row 3 */}
              <div>
                <input
                  type="text"
                  placeholder="Institution/University's website link *"
                  className="w-full border border-gray-200 rounded p-[14px] text-[13px] font-medium placeholder-[#9ca3af] focus:outline-none focus:border-blue-400 focus:ring-1 focus:ring-blue-400 transition-colors"
                />
              </div>
              <div className="relative border border-gray-200 rounded p-2 px-4 bg-white cursor-pointer hover:border-blue-400 transition-colors">
                <label className="block text-[10px] text-red-500 font-bold mb-[2px]">University location*</label>
                <select className="w-full text-[13px] text-[#111827] font-bold outline-none bg-transparent appearance-none cursor-pointer">
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Australia</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-[18px] h-[18px] pointer-events-none" />
              </div>

              {/* Row 4 */}
              <div className="relative border border-gray-200 rounded p-2 px-4 bg-white cursor-pointer hover:border-blue-400 transition-colors">
                <label className="block text-[10px] text-red-500 font-bold mb-[2px]">Enquiry Type *</label>
                <select className="w-full text-[13px] text-[#111827] font-bold outline-none bg-transparent appearance-none cursor-pointer">
                  <option>Select</option>
                  <option>Partnership</option>
                  <option>Student Recruitment</option>
                  <option>Other</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-[18px] h-[18px] pointer-events-none" />
              </div>

            </div>

            {/* Consents Checkbox */}
            <label className="flex items-start gap-3 mt-8 pt-4 cursor-pointer group">
              <input
                type="checkbox"
                className="mt-1 w-4 h-4 border-2 border-gray-300 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
              />
              <div className="text-[11px] text-[#9ca3af] leading-[1.6]">
                <span className="text-[#374151] font-bold text-[11.5px] block mb-1">
                  By clicking on the box, you declare<span className="text-red-500">*</span>
                </span>
                <p>1. The above information/application/document(s) are true and complete. I understand that a false statement or documents may disqualify me from becoming a Recruitment Partner for Gradient Edu.</p>
                <p>2. I have reviewed and consented to the Gradient Edu Terms and Conditions and Privacy Policy agent.</p>
              </div>
            </label>

            {/* Submit Button */}
            <div className="mt-8 flex justify-center">
              <button
                type="button"
                className="w-full max-w-[530px] bg-[#4238f2] hover:bg-[#342ac4] text-white font-bold py-[14px] rounded transition-colors text-[15px] shadow-sm tracking-wide"
              >
                Contact Me
              </button>
            </div>

          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default InstitutionRegister;
