import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50/50 min-h-screen pb-24 font-sans">
      
      {/* Hero Header Section */}
      <div className="relative pt-20 pb-24 border-b border-gray-100 overflow-hidden bg-gradient-to-br from-indigo-50/70 via-white to-blue-50/70">
        
        {/* Subtle Graph Paper Background overlay */}
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none" 
             style={{ backgroundImage: 'linear-gradient(to right, #e2e8f0 1px, transparent 1px), linear-gradient(to bottom, #e2e8f0 1px, transparent 1px)', backgroundSize: '30px 30px' }} 
        />
        
        {/* Floating Stars */}
        <div className="absolute top-16 right-[15%] text-yellow-400 opacity-60">
          <Star size={18} fill="currentColor" stroke="none" />
        </div>
        <div className="absolute bottom-24 left-[15%] text-yellow-400 opacity-60">
          <Star size={14} fill="currentColor" stroke="none" />
        </div>
        <div className="absolute bottom-16 right-[20%] text-yellow-400 opacity-60">
          <Star size={12} fill="currentColor" stroke="none" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 flex flex-col items-center text-center">
          <span className="bg-blue-100 text-blue-600 rounded-full text-[10px] font-bold px-3 py-1 uppercase tracking-wider mb-6">
            Legal Document
          </span>
          <h1 className="text-4xl md:text-[44px] font-extrabold text-gray-900 mb-4 tracking-tight">
            Privacy & Policy
          </h1>
          <p className="text-gray-500 text-[15px] mb-4 max-w-md">
            At Gradient Edu, we respect your privacy and are committed to protecting your personal information.
          </p>
          
          {/* Orange Squiggle */}
          <svg width="60" height="12" viewBox="0 0 60 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="mt-1">
             <path d="M1 9.5C5.5 9.5 7.5 2.5 12 2.5C16.5 2.5 18.5 9.5 23 9.5C27.5 9.5 29.5 2.5 34 2.5C38.5 2.5 40.5 9.5 45 9.5C49.5 9.5 52.5 2.5 59 2.5" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      <div className="max-w-[900px] mx-auto px-4 sm:px-6 -mt-8 relative z-20">
        
        {/* Description Box */}
        <div className="bg-[#EAF0FC] rounded-xl p-8 md:p-10 mb-8 border border-blue-100/50">
          <h4 className="text-blue-600 font-bold text-[14px] mb-4">Your Data, Protected</h4>
          <p className="text-[#4B5563] text-[15px] leading-[1.8]">
            At <span className="font-bold text-blue-600">Gradient Edu</span>, we respect your privacy and are committed to protecting your personal information.
          </p>
        </div>

        {/* 01 What We Collect */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">01</span>
            <h3 className="text-gray-900 text-lg font-bold">What We Collect</h3>
          </div>
          <ul className="text-gray-500 text-[14px] leading-relaxed space-y-3 ml-[42px] list-disc marker:text-blue-400">
            <li>Basic details of the referrer and referred student (name, email, phone)</li>
            <li>Information required to process applications and provide services</li>
          </ul>
        </div>

        {/* 02 How We Use It */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">02</span>
            <h3 className="text-gray-900 text-lg font-bold">How We Use It</h3>
          </div>
          <ul className="text-gray-500 text-[14px] leading-relaxed space-y-3 ml-[42px] list-disc marker:text-blue-400">
            <li>To contact and support referred students</li>
            <li>To process referrals and rewards</li>
            <li>To improve our services and user experience</li>
          </ul>
        </div>

        {/* 03 What We Don't Do */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">03</span>
            <h3 className="text-gray-900 text-lg font-bold">What We Don't Do</h3>
          </div>
          <ul className="text-gray-500 text-[14px] leading-relaxed space-y-3 ml-[42px] list-disc marker:text-blue-400">
            <li>We do not sell your personal data to third parties</li>
            <li>We only share information with trusted partners (e.g., universities) where necessary</li>
          </ul>
        </div>

        {/* 04 Your Control */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">04</span>
            <h3 className="text-gray-900 text-lg font-bold">Your Control</h3>
          </div>
          <ul className="text-gray-500 text-[14px] leading-[1.8] ml-[42px] list-disc marker:text-blue-400">
            <li>You can request access, updates, or deletion of your data at any time</li>
          </ul>
        </div>

        {/* 05 Need More Information? */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-4">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">05</span>
            <h3 className="text-gray-900 text-lg font-bold">Need More Information?</h3>
          </div>
          <div className="ml-[42px] text-gray-500 text-[14px] leading-[1.8]">
            For full details, please refer to our Privacy Policy or contact our team.
          </div>
        </div>

        {/* 06 Referral Rewards */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">06</span>
            <h3 className="text-gray-900 text-lg font-bold">Referral Rewards</h3>
          </div>
          <div className="ml-[42px]">
            <p className="text-gray-500 text-[14px] mb-4">Earn more as you refer more students to Gradient Edu:</p>
            <ul className="text-gray-500 text-[14px] leading-relaxed space-y-3 list-disc marker:text-blue-400">
              <li><span className="font-semibold text-gray-800">Refer 1-5 students in a calendar year:</span> Earn £300 per successfully enrolled student</li>
              <li><span className="font-semibold text-gray-800">Refer 6 or more students in the same year:</span> Earn £500 per successfully enrolled student</li>
            </ul>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;
