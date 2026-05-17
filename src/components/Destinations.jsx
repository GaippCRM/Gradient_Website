import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const carouselDestinations = [
  { name: 'United States', stats: '15+ Universities • 3k+ Courses', img: '/image/country/newyork.jpg' },
  { name: 'United Kingdom', stats: '20+ Universities • 5k+ Courses', img: '/image/country/london.jpg' },
  { name: 'Germany', stats: '15+ Universities • 216 Courses', img: '/image/country/berlin.jpg' },
  { name: 'Australia', stats: '8 Universities • 8 Courses', img: '/image/country/sydney.jpg' },
  { name: 'Ireland', stats: '8 Universities • 8 Courses', img: '/image/country/dublin.jpg' },
];

const gridDestinations = [
  { name: 'United Kingdom', stats: '150 Universities • 20.3k+ Courses', img: '/image/country/uk_grid.jpg' },
  { name: 'Australia', stats: '45 Universities • 3.6k+ Courses', img: '/image/country/australia_grid.jpg' },
  { name: 'Ireland', stats: '15+ Universities • 1.5k+ Courses', img: '/image/country/ireland_grid.jpg' },
  { name: 'Germany', stats: '15+ Universities • 216 Courses', img: '/image/country/germany_grid.jpg' },
];

const Destinations = ({ isCarousel = false }) => {
  // Duplicate destinations to ensure seamless marquee looping
  const duplicatedDestinations = [...carouselDestinations, ...carouselDestinations, ...carouselDestinations, ...carouselDestinations, ...carouselDestinations];

  if (isCarousel) {
    return (
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-[42px] font-normal text-[#160c3b] mb-4 tracking-tight leading-tight">
              Your Perfect Study Destination is<br className="hidden sm:inline" /> Just One Click Away
            </h2>
            <p className="text-gray-500 text-lg max-w-3xl leading-relaxed">
              Choose from top countries like Australia, the USA, the UK, and more. We’ll help you find the best universities, scholarships, and opportunities—fast and easy.
            </p>
          </motion.div>
        </div>

        <div className="relative w-full">
          {/* Left and Right Fade Overlays for a premium glass/smooth blend look */}
          <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none"></div>

          {/* Marquee Runner */}
          <div className="flex relative items-center overflow-hidden select-none py-4">
            <motion.div
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
              className="flex gap-8 pr-8"
            >
              {duplicatedDestinations.map((dest, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 w-[300px] bg-white border text-left border-gray-100 rounded-[32px] overflow-hidden hover:shadow-2xl transition-all duration-500 flex flex-col group relative"
                >
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={dest.img}
                      alt={dest.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                  <div className="p-6 flex-grow flex flex-col justify-center text-center">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {dest.name}
                    </h3>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">Top Study Destinations</h2>
        <p className="text-gray-500 text-lg">Discover world-class education in these popular countries</p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {gridDestinations.map((dest, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -10 }}
            className="bg-white border text-center border-gray-100 rounded-[32px] overflow-hidden hover:shadow-2xl hover:bg-[#eef2ff]/50 transition-all duration-500 flex flex-col group relative cursor-pointer"
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={dest.img}
                alt={dest.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            <div className="p-6 flex-grow flex flex-col justify-between items-center">
              <div className="mb-4">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors mb-2">{dest.name}</h3>
                <p className="text-gray-500 text-sm">{dest.stats}</p>
              </div>
              <button className="w-full py-2.5 px-4 border border-gray-300 rounded-full text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-blue-600 hover:text-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                Explore <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
export default Destinations;
