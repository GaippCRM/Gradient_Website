import React, { useEffect } from 'react';
import { Star } from 'lucide-react';

const ReferEarn = () => {
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
            Referral Program
          </span>
          <h1 className="text-4xl md:text-[44px] font-extrabold text-gray-900 mb-4 tracking-tight">
            Refer & Earn with <br className="hidden md:block"/> Gradient Edu
          </h1>
          <p className="text-gray-500 text-[15px] mb-4">
            Help a Friend Study Abroad — Get Rewarded
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
          <p className="text-[#4B5563] text-[15px] leading-[1.8]">
            Know someone planning to study abroad? Refer them to <span className="font-bold text-blue-600">Gradient Edu</span> and earn rewards when they successfully apply and enrol through our platform.
            <br/><br/>
            It's simple, transparent, and designed to benefit both you and your network.
          </p>
        </div>

        {/* 01 How It Works */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">01</span>
            <h3 className="text-gray-900 text-lg font-bold">How It Works</h3>
          </div>
          <ul className="text-gray-600 text-[14px] leading-relaxed space-y-3 ml-[42px] list-disc marker:text-gray-300">
            <li><span className="font-semibold text-gray-800">1. Refer:</span> Share your friend's details through our referral form or invite link.</li>
            <li><span className="font-semibold text-gray-800">2. We Guide Them:</span> Our advisors support them with course selection, applications, and visa guidance.</li>
            <li><span className="font-semibold text-gray-800">3. They Enroll:</span> Once your referral successfully enrolls at a partner institution.</li>
            <li><span className="font-semibold text-gray-800">4. You Earn:</span> You receive your referral reward.</li>
          </ul>
        </div>

        {/* 02 What You Get */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">02</span>
            <h3 className="text-gray-900 text-lg font-bold">What You Get</h3>
          </div>
          <ul className="text-gray-600 text-[14px] leading-relaxed space-y-3 ml-[42px]">
            <li className="flex items-start gap-2"><span>🔥</span> Competitive referral rewards</li>
            <li className="flex items-start gap-2"><span>🎯</span> No limit on number of referrals</li>
            <li className="flex items-start gap-2"><span>🤝</span> Support from our expert team</li>
          </ul>
        </div>

        {/* 03 Who Can You Refer? */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">03</span>
            <h3 className="text-gray-900 text-lg font-bold">Who Can You Refer?</h3>
          </div>
          <ul className="text-gray-600 text-[14px] leading-relaxed space-y-3 ml-[42px] list-disc marker:text-gray-300">
            <li>Students planning to study abroad</li>
            <li>Friends, family, or colleagues</li>
            <li>Anyone looking for guidance on international education</li>
          </ul>
        </div>

        {/* 04 Why Refer Gradient Edu? */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-4">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">04</span>
            <h3 className="text-gray-900 text-lg font-bold">Why Refer Gradient Edu?</h3>
          </div>
          <div className="ml-[42px] text-gray-500 text-[14px] leading-[1.8]">
            With 30+ years of combined experience in international admissions, recruitment, and compliance, Gradient Edu offers trusted, end-to-end support — making it easier for your referrals to succeed.
          </div>
        </div>

        {/* 05 Referral Terms */}
        <div className="bg-white rounded-xl p-8 mb-6 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <div className="flex items-center mb-5">
            <span className="bg-blue-600 text-white rounded-full px-2.5 py-0.5 text-[11px] font-bold mr-3 font-mono tracking-wider">05</span>
            <h3 className="text-gray-900 text-lg font-bold">Referral Terms</h3>
          </div>
          <ul className="text-gray-500 text-[13px] leading-relaxed space-y-2.5 ml-[42px] list-disc marker:text-gray-300">
            <li>Rewards are applicable only for successful enrolments through Gradient Edu.</li>
            <li>The referred student must be new to our platform.</li>
            <li>Referral must be submitted before the student registers or applies.</li>
            <li>Reward timelines and amounts may vary by institution or destination.</li>
            <li>Gradient Edu reserves the right to verify and approve all referrals.</li>
          </ul>
        </div>

        {/* Get Started */}
        <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm border-l-4 border-l-blue-600">
          <h3 className="text-gray-900 text-lg font-bold mb-4 font-sans">Get Started</h3>
          <p className="text-[14px] flex items-center gap-2">
            <span>👉</span>
            <a href="#" className="text-blue-600 hover:text-blue-800 font-medium underline underline-offset-4 decoration-blue-200 hover:decoration-blue-600 transition-colors">
              Refer a Student Now
            </a>
          </p>
        </div>

      </div>
    </div>
  );
};

export default ReferEarn;
