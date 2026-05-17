import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const baseInstitutions = [
  { id: 1, name: 'University of Exeter', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80' },
  { id: 2, name: 'University of Glasgow', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1606042188404-1b3b3a059367?auto=format&fit=crop&w=600&q=80' },
  { id: 3, name: 'Aston University', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=600&q=80' },
  { id: 4, name: 'University of Liverpool', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?auto=format&fit=crop&w=600&q=80' },
  { id: 5, name: 'University of Sussex', country: 'United Kingdom', image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=600&q=80' },
];

const Institutions = () => {
  // Multiply the items for seamless loop. We use a larger array to ensure smoothness.
  const duplicatedItems = [...baseInstitutions, ...baseInstitutions, ...baseInstitutions, ...baseInstitutions, ...baseInstitutions];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="text-4xl md:text-[42px] font-normal text-[#160c3b] mb-4 tracking-tight">
          Meet 500+ institutions around the World
        </h2>
        <p className="text-gray-500 text-lg">
          Our trusted partners guarantee the highest standards of education
        </p>
      </div>

      <div className="relative w-full mb-16">
        {/* Left and Right Fade Overlays */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Carousel Container */}
        <div className="flex relative items-center pointer-events-none select-none">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 45 }}
            className="flex gap-6 pr-6"
          >
            {duplicatedItems.map((inst, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[240px] md:w-[280px] flex flex-col group cursor-pointer pointer-events-auto"
              >
                <div className="relative aspect-square overflow-hidden mb-4">
                  <img
                    src={inst.image}
                    alt={inst.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="text-center px-2">
                  <h3 className="text-lg text-gray-800 mb-1 font-medium group-hover:text-blue-600 transition-colors">
                    {inst.name}
                  </h3>
                  <p className="text-[13px] text-gray-400">
                    {inst.country}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="flex justify-center">
        <Link to="/course-search" className="px-8 py-3 bg-[#3f3f3f] text-gray-100 text-sm hover:bg-black transition-colors flex items-center justify-center font-medium shadow-md inline-flex">
          View all <span className="ml-2 font-light">→</span>
        </Link>
      </div>
    </section>
  );
};

export default Institutions;
