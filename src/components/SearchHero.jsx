import React, { useState } from 'react';
import { Search, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const filters = [
  { id: 'country', label: 'Country', icon: Globe, options: [
    'UK',
    'Canada',
    'Australia',
    'USA',
    'Germany',
    'Ireland',
    'New Zealand',
    'France',
    'Malta',
    'Spain',
    'United Arab Emirates',
    'Belgium',
    'Russia',
    'Hungary',
    'Latvia',
    'Singapore',
    'Japan',
    'Switzerland',
    'United States'
  ] },
  { id: 'degree', label: 'Degree', icon: Globe, options: ['Undergraduate', 'Postgraduate', 'Postgraduate Research', 'Foundation', 'Professional','Integrated Programmers','Extended Masters','Pre Masters', 'Undergraduate Top Up', 'Postgraduate Top Up'] },
  { id: 'budget', label: 'Budget', icon: Globe, options: ['<$10K', '$10K - $20K', '$20K - $30K', '>$30K'] },
  { id: 'intake', label: 'Intake', icon: Globe, options: ['2026', '2027', '2028'] },
  { id: 'duration', label: 'Duration', icon: Globe, options: ['Less Than 1 year', '1-2 years', '2-3 years', '3-4 years', '4-5 years', 'More Than 5 years'] }
];

const studentCards = [
  {
    id: 1,
    name: "Master of Computer Science",
    uni: "University of Glasgow",
    color: "bg-[#2510a3]", // Deep purple-blue
    img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?q=80&w=600&auto=format&fit=crop",
    delay: 0.1,
    yOffset: 0,
    xOffset: -80,
    zIndex: 10
  },
  {
    id: 2,
    name: "Master of Computer Science",
    uni: "University of Liverpool",
    color: "bg-[#0f766e]", // Deep teal
    img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop",
    delay: 0.3,
    yOffset: 20,
    xOffset: 0,
    zIndex: 20
  },
  {
    id: 3,
    name: "Master of Computer Science",
    uni: "University of Leeds",
    color: "bg-[#c026d3]", // Fuchsia
    img: "https://images.unsplash.com/photo-1544717302-de2939b7ef71?q=80&w=600&auto=format&fit=crop",
    delay: 0.5,
    yOffset: 40,
    xOffset: 80,
    zIndex: 30
  },
];

const SearchHero = () => {
  const [openFilter, setOpenFilter] = useState(null);

  return (
    <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 z-20 w-full min-h-screen flex items-center overflow-x-clip">
      {/* Background Blobs Container with restricted overflow */}
      <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-0 w-[800px] h-[400px] bg-blue-100/40 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[10%] right-[10%] w-[500px] h-[500px] bg-purple-100/30 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center w-full">

        {/* Left Column: Text & Search */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1e2022] mb-6 tracking-tight leading-[1.15]">
            Discover the Right Course <br className="hidden lg:block" /> for Your Future
          </h1>
          <p className="text-gray-500 text-lg md:text-xl mb-10 leading-relaxed max-w-xl">
            Explore thousands of courses across the globe with a simple, intuitive search. Our platform understands your goals and helps you find the best-fit programs effortlessly.
          </p>

          {/* Large Search Bar */}
          <div className="relative w-full max-w-xl mb-8 group">
            <div className="absolute inset-0 bg-blue-600/5 rounded-full blur-xl group-focus-within:bg-blue-600/10 transition-all duration-300"></div>
            <div className="relative bg-white rounded-full p-2 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.08)] flex items-center border border-gray-100 focus-within:border-blue-200 transition-all duration-300">
              <Search className="text-gray-400 ml-5 mr-3 shrink-0" size={22} />
              <input
                type="text"
                placeholder="Search here..."
                className="flex-grow bg-transparent border-none outline-none text-gray-700 text-lg px-2 h-12 w-full min-w-0"
              />
              <button className="bg-blue-600 text-white px-6 md:px-8 py-3.5 rounded-full font-semibold hover:shadow-lg hover:bg-blue-700 active:scale-95 transition-all flex items-center gap-2 shrink-0">
                <Search size={18} />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>

          {/* Filter Chips */}
          <div className="flex flex-wrap justify-start gap-3 relative z-30">
            {filters.map((filter) => (
              <div
                key={filter.id}
                className={`relative ${openFilter === filter.id ? 'z-50' : 'z-10'}`}
                onMouseEnter={() => setOpenFilter(filter.id)}
                onMouseLeave={() => setOpenFilter(null)}
              >
                <button
                  className={`flex items-center text-sm font-medium px-5 py-2.5 rounded-full backdrop-blur-md transition-all border ${openFilter === filter.id
                    ? 'bg-blue-50 border-blue-200 text-blue-600 shadow-sm'
                    : 'bg-white/80 border-gray-200 text-gray-600 hover:bg-white hover:border-gray-300'
                    }`}
                >
                  <filter.icon size={16} className={`mr-2 ${openFilter === filter.id ? 'text-blue-600' : 'text-gray-400'}`} />
                  {filter.label}
                </button>

                <AnimatePresence>
                  {openFilter === filter.id && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 5, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-2 min-w-[200px] max-h-[300px] overflow-y-auto bg-white rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.12)] py-3 border border-gray-100 z-50 origin-top-left scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent"
                    >
                      {/* Invisible bridge wrapper to keep mouse event flowing */}
                      <div className="absolute -top-3 left-0 right-0 h-4 bg-transparent" />

                      {filter.options.map((option, idx) => (
                        <button
                          key={idx}
                          className="w-full text-left px-5 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                        >
                          {option}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Animated Cards */}
        <div className="relative h-[450px] md:h-[600px] w-full flex justify-center items-center mt-12 lg:mt-0">
          <div className="relative w-full max-w-[500px] h-full flex items-center justify-center lg:-ml-10">
            {studentCards.map((card) => (
              <motion.div
                key={card.id}
                initial={{ opacity: 0, y: 50, x: 50 }}
                animate={{
                  opacity: 1,
                  y: [card.yOffset, card.yOffset - 15, card.yOffset],
                  x: card.xOffset
                }}
                transition={{
                  opacity: { duration: 0.8, delay: card.delay },
                  y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: card.delay },
                  x: { duration: 0.8, delay: card.delay, type: "spring", stiffness: 50 }
                }}
                whileHover={{ scale: 1.05, zIndex: 50, transition: { duration: 0.2 } }}
                className={`absolute w-[200px] sm:w-[240px] md:w-[260px] h-[300px] sm:h-[360px] md:h-[380px] rounded-[2rem] ${card.color} shadow-2xl overflow-hidden flex flex-col items-center pt-6 cursor-pointer border-[6px] border-white/10`}
                style={{ zIndex: card.zIndex }}
              >
                {/* Decorative blob inside card */}
                <div className="absolute top-1/3 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>

                {/* Text Section */}
                <div className="text-center px-4 mb-4 z-20 w-full">
                  <h3 className="text-white font-bold text-xs sm:text-sm md:text-[15px] leading-tight mb-2 px-2">
                    {card.name}
                  </h3>
                  <div className="bg-white text-gray-800 font-semibold text-[9px] sm:text-[10px] md:text-xs px-3 py-1 rounded-sm shadow-sm inline-block">
                    {card.uni}
                  </div>
                </div>

                {/* Circular Badge SVG */}
                <div className="absolute left-2 top-24 sm:top-28 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center z-20 hidden sm:flex">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                    className="w-full h-full relative"
                  >
                    <svg viewBox="0 0 100 100" className="w-full h-full absolute inset-0 text-yellow-400 opacity-90 drop-shadow-md">
                      <path id={`curve-${card.id}`} d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="transparent" />
                      <text className="text-[14px] uppercase tracking-[0.2em] fill-current font-bold">
                        <textPath href={`#curve-${card.id}`} startOffset="0">Recently Placed •</textPath>
                      </text>
                    </svg>
                  </motion.div>
                </div>

                {/* Gradient Overlay for image */}
                <div className="absolute bottom-0 left-0 w-full h-[60%] bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10"></div>

                {/* Student Image */}
                <img
                  src={card.img}
                  alt={card.name}
                  className="absolute bottom-0 w-full h-[70%] object-cover object-top z-0"
                />
              </motion.div>
            ))}
          </div>

          {/* Decorative Stars outside cards */}
          <motion.div
            animate={{ rotate: 360, scale: [1, 1.2, 1] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-[20%] text-yellow-300 opacity-80 z-0"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
          </motion.div>

          <motion.div
            animate={{ rotate: -360, scale: [1, 1.1, 1] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute bottom-10 right-0 text-yellow-300 opacity-80 z-0"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" /></svg>
          </motion.div>

          {/* Squiggly line */}
          <svg className="absolute bottom-20 left-[10%] w-24 h-24 text-yellow-400/80 z-0 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            <motion.path
              d="M10 80 Q 25 50, 40 80 T 70 50 T 100 80"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 2, delay: 0.5, ease: "easeOut" }}
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default SearchHero;
