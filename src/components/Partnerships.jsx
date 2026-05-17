import React from 'react';

// 1. British Council Logo
const BritishCouncilLogo = () => (
  <svg viewBox="0 0 200 50" className="h-14 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="15" cy="16" r="4.5" fill="#3c2685" />
    <circle cx="28" cy="16" r="4.5" fill="#3c2685" />
    <circle cx="15" cy="29" r="4.5" fill="#3c2685" />
    <circle cx="28" cy="29" r="4.5" fill="#3c2685" />
    
    <text x="45" y="21" fill="#3c2685" fontSize="15" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="0.05em">BRITISH</text>
    <text x="45" y="35" fill="#3c2685" fontSize="15" fontWeight="900" fontFamily="Inter, sans-serif" letterSpacing="0.05em">COUNCIL</text>
  </svg>
);

// 2. Lifelong Learning Logo
const LifelongLearningLogo = () => (
  <svg viewBox="0 0 200 50" className="h-14 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="0" y="7" width="38" height="25" fill="#003399" rx="1.5" />
    {[...Array(12)].map((_, i) => {
      const angle = (i * 2 * Math.PI) / 12;
      const x = 19 + 7.5 * Math.cos(angle);
      const y = 19.5 + 7.5 * Math.sin(angle);
      return (
        <path
          key={i}
          d={`M ${x} ${y-1} L ${x+0.3} ${y-0.3} L ${x+1} ${y-0.3} L ${x+0.4} ${y+0.2} L ${x+0.7} ${y+0.9} L ${x} ${y+0.4} L ${x-0.7} ${y+0.9} L ${x-0.4} ${y+0.2} L ${x-1} ${y-0.3} L ${x-0.3} ${y-0.3} Z`}
          fill="#FFCC00"
        />
      );
    })}
    <text x="46" y="20" fill="#1b4a9c" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">Lifelong</text>
    <text x="46" y="33" fill="#1b4a9c" fontSize="14" fontWeight="700" fontFamily="Inter, sans-serif">Learning</text>
  </svg>
);

// 3. EAIE Logo
const EAIELogo = () => (
  <svg viewBox="0 0 200 50" className="h-14 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(5, 5)">
      <path d="M15,0 C23,0 30,7 30,15 C30,23 23,30 15,30 C7,30 0,23 0,15 C0,7 7,0 15,0 Z" fill="#4fa83d" opacity="0.1" />
      <path d="M15,2 C22,2 28,8 28,15 C28,20 25,25 20,27 C15,22 15,12 15,2 Z" fill="#4fa83d" />
      <path d="M15,2 C15,12 15,22 20,27 C15,29 10,27 8,25 C12,18 12,8 15,2 Z" fill="#8ec53f" />
    </g>
    
    <text x="45" y="22" fill="#1f4b82" fontSize="19" fontWeight="950" fontStyle="italic" fontFamily="Inter, sans-serif" letterSpacing="0.05em">EAIE</text>
    <text x="45" y="31" fill="#666666" fontSize="6.2" fontWeight="700" fontFamily="Inter, sans-serif">European Association for</text>
    <text x="45" y="38" fill="#666666" fontSize="6.2" fontWeight="700" fontFamily="Inter, sans-serif">International Education</text>
  </svg>
);

// 4. Shams Logo
const ShamsLogo = () => (
  <svg viewBox="0 0 200 50" className="h-14 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(10, 5)">
      <circle cx="15" cy="20" r="3.5" fill="#693b96" />
      {[...Array(12)].map((_, i) => {
        const angle = (i * Math.PI) / 6;
        const x1 = 15 + 5.5 * Math.cos(angle);
        const y1 = 20 + 5.5 * Math.sin(angle);
        const x2 = 15 + 11 * Math.cos(angle);
        const y2 = 20 + 11 * Math.sin(angle);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke="#693b96"
            strokeWidth="1.8"
            strokeLinecap="round"
          />
        );
      })}
    </g>
    
    <text x="45" y="20" fill="#2d2d2d" fontSize="16" fontWeight="900" fontFamily="Inter, sans-serif">Shams</text>
    <text x="45" y="32" fill="#693b96" fontSize="9.5" fontWeight="700" fontFamily="Inter, sans-serif" letterSpacing="0.05em">FREE ZONE</text>
    
    <text x="110" y="21" fill="#2d2d2d" fontSize="13" fontWeight="900" fontFamily="Inter, sans-serif">شمس</text>
    <text x="110" y="32" fill="#693b96" fontSize="7.5" fontWeight="800" fontFamily="Inter, sans-serif">منطقة حرة</text>
  </svg>
);

// 5. Sharjah Media City Logo
const SharjahMediaCityLogo = () => (
  <svg viewBox="0 0 220 50" className="h-14 w-auto opacity-75 hover:opacity-100 transition-opacity duration-300" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g transform="translate(10, 5)">
      <rect x="0" y="2" width="32" height="32" rx="8" fill="#f05a28" opacity="0.08" />
      <circle cx="16" cy="18" r="11" stroke="#f05a28" strokeWidth="1.2" strokeDasharray="2, 2" />
      <circle cx="16" cy="18" r="7.5" fill="#f05a28" />
      <circle cx="16" cy="18" r="3.5" fill="#ffffff" />
    </g>
    
    <text x="50" y="20" fill="#f05a28" fontSize="10.5" fontWeight="800" fontFamily="Inter, sans-serif">مدينة الشارقة للإعلام</text>
    <text x="50" y="33" fill="#4a4a4a" fontSize="9.5" fontWeight="800" fontFamily="Inter, sans-serif" letterSpacing="0.02em">Sharjah Media City</text>
    
    <rect x="155" y="24" width="22" height="10" rx="2" fill="#f05a28" />
    <text x="166" y="31" fill="#ffffff" fontSize="6" fontWeight="900" fontFamily="Inter, sans-serif" textAnchor="middle">shams</text>
  </svg>
);

const Partnerships = () => {
  return (
    <section className="py-16 bg-[#fafbfc] border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xl font-bold text-gray-700 uppercase tracking-widest mb-10">
          Our Industry Partnerships
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-14 lg:gap-18 px-4">
          <BritishCouncilLogo />
          <LifelongLearningLogo />
          <EAIELogo />
          <ShamsLogo />
          <SharjahMediaCityLogo />
        </div>
      </div>
    </section>
  );
};

export default Partnerships;
