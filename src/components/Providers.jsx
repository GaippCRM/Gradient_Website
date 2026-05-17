import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const universityLogos = [
  { name: 'University of Brighton', short: 'Brighton', logo: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://brighton.ac.uk&size=128' },
  { name: 'Middlesex University', short: 'Middlesex', logo: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://mdx.ac.uk&size=128' },
  { name: 'University of Bath', short: 'Bath', logo: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://bath.ac.uk&size=128' },
  { name: 'University of Portsmouth', short: 'Portsmouth', logo: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://port.ac.uk&size=128' },
  { name: 'Coventry University', short: 'Coventry', logo: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://coventry.ac.uk&size=128' },
  { name: 'University of Derby', short: 'Derby', logo: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://derby.ac.uk&size=128' },
  { name: 'Swansea University', short: 'Swansea', logo: 'https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://swansea.ac.uk&size=128' },
];

const Providers = () => {
  return (
    <section className="py-12 lg:py-16 bg-[#1e76ff] text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          
          {/* Left Content */}
          <div className="mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-[42px] font-medium mb-6 leading-[1.2] tracking-tight">
                Access a wide range of <br className="hidden md:block"/> education providers.
              </h2>
              <p className="text-[16px] text-white/90 mb-10 max-w-[480px] leading-[1.7]">
                Choose from top countries like Australia, the USA, the UK, and more. We'll help you find the best universities, scholarships, and opportunities—fast and easy.
              </p>
              <Link to="/course-search" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#4b5563] text-white text-[14px] font-medium rounded hover:bg-[#374151] hover:shadow-lg transition-all duration-300">
                View all <ArrowRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right Content - Provider Logo Grid */}
          <div className="relative h-[480px] lg:h-[550px] overflow-hidden -mx-4 sm:mx-0">
            {/* Top/Bottom Gradient Masks for smooth fading */}
            <div className="absolute top-0 inset-x-0 h-24 bg-gradient-to-b from-[#1e76ff] to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-[#1e76ff] to-transparent z-10 pointer-events-none"></div>
            
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 lg:gap-5 h-full px-4 sm:px-0">
              {/* Column 1 - Scrolling Up */}
              <div className="flex flex-col gap-4 lg:gap-5 overflow-hidden relative">
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
                  className="flex flex-col gap-4 lg:gap-5"
                >
                  {[...Array(10)].map((_, i) => {
                    const uni = universityLogos[i % universityLogos.length];
                    return (
                      <div key={i} className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 flex flex-col items-center justify-center aspect-[4/3] shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                        <img src={uni.logo} alt={uni.name} className="w-10 h-10 lg:w-12 lg:h-12 object-contain mb-3" />
                        <span className="text-[11px] lg:text-[13px] font-bold text-gray-800 text-center leading-tight">{uni.name}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Column 2 - Scrolling Down */}
              <div className="flex flex-col gap-4 lg:gap-5 overflow-hidden relative">
                <motion.div
                  animate={{ y: ["-50%", "0%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
                  className="flex flex-col gap-4 lg:gap-5"
                >
                  {[...Array(10)].map((_, i) => {
                    const uni = universityLogos[(i + 2) % universityLogos.length];
                    return (
                      <div key={i} className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 flex flex-col items-center justify-center aspect-[4/3] shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                        <img src={uni.logo} alt={uni.name} className="w-10 h-10 lg:w-12 lg:h-12 object-contain mb-3" />
                        <span className="text-[11px] lg:text-[13px] font-bold text-gray-800 text-center leading-tight">{uni.name}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              {/* Column 3 - Scrolling Up */}
              <div className="hidden sm:flex flex-col gap-4 lg:gap-5 overflow-hidden relative">
                <motion.div
                  animate={{ y: ["0%", "-50%"] }}
                  transition={{ repeat: Infinity, ease: "linear", duration: 28 }}
                  className="flex flex-col gap-4 lg:gap-5"
                >
                  {[...Array(10)].map((_, i) => {
                    const uni = universityLogos[(i + 4) % universityLogos.length];
                    return (
                      <div key={i} className="bg-white rounded-xl lg:rounded-2xl p-4 lg:p-6 flex flex-col items-center justify-center aspect-[4/3] shadow-md hover:shadow-xl transition-shadow cursor-pointer">
                        <img src={uni.logo} alt={uni.name} className="w-10 h-10 lg:w-12 lg:h-12 object-contain mb-3" />
                        <span className="text-[11px] lg:text-[13px] font-bold text-gray-800 text-center leading-tight">{uni.name}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Providers;
