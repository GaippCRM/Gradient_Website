import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CircularStamp = ({ color1 = "#fbc5f2", color2 = "#FFB800" }) => (
  <div className="absolute left-[-15px] top-[40%] w-[100px] h-[100px] z-30 opacity-90 animate-[spin_10s_linear_infinite]">
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <path id="circlePath" d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0" fill="none" />
      <text className="text-[12px] font-bold uppercase tracking-[0.1em]" fill={color2}>
        <textPath href="#circlePath" startOffset="0%">RECENTLY PLACED • </textPath>
      </text>
      <text className="text-[12px] font-bold uppercase tracking-[0.1em]" fill={color1}>
        <textPath href="#circlePath" startOffset="50%">RECENTLY PLACED • </textPath>
      </text>
    </svg>
  </div>
);

const studentCards = [
  {
    bg: 'bg-[#150b73]',
    blob: 'bg-[#4b35e8]',
    course: 'Master of Computer Science',
    university: 'University of Glasgow',
    badgeBg: 'bg-white',
    badgeText: 'text-gray-900',
    color1: '#f8d97e',
    color2: '#FFB800',
  },
  {
    bg: 'bg-[#0f6c56]',
    blob: 'bg-[#1e9b7a]',
    course: 'Master of Computer Science',
    university: 'University of Liverpool',
    badgeBg: 'bg-[#FFC700]',
    badgeText: 'text-gray-900',
    color1: '#74f2d0',
    color2: '#FFC700',
  },
  {
    bg: 'bg-[#ba13a3]',
    blob: 'bg-[#e841d1]',
    course: 'Master of Computer Science',
    university: 'University of Liverpool',
    badgeBg: 'bg-[#FFC700]',
    badgeText: 'text-gray-900',
    color1: '#f8bcf1',
    color2: '#FFC700',
  }
];

const Hero = () => {
  return (
    <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden bg-gradient-to-br from-[#eff5fd] to-white">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-200/50 blur-[120px]" />
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-blue-200/50 blur-[100px]" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">

          {/* Left Content */}
          <div className="lg:col-span-5 relative z-10 lg:pr-8 text-center lg:text-left mb-16 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-semibold text-sm mb-6">
                <Sparkles size={16} />
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
                Achieve your international education goals — <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">with confidence</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0">
                Discover your perfect path to studying abroad. We connect ambitious students with world-class universities, guiding you every step of the way.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <Link to="/course-search" className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:-translate-y-1 transition-all flex items-center justify-center group">
                  Explore courses
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Right Content - Carousel of Student Cards */}
          <div className="lg:col-span-7 relative h-[450px]">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute top-0 left-0 lg:left-4 w-max h-full flex gap-6 flex-nowrap overflow-visible pl-4 sm:pl-0"
            >
              {studentCards.map((card, index) => (
                <div
                  key={index}
                  className={`relative w-[280px] h-full rounded-[28px] overflow-hidden shrink-0 shadow-xl ${card.bg}`}
                >
                  {/* Decorative Blob */}
                  <div
                    className={`absolute -bottom-10 -right-20 w-[140%] h-[70%] rounded-[100px] rotate-[-15deg] ${card.blob}`}
                  />

                  {/* Circular SVG Stamp */}
                  <CircularStamp color1={card.color1} color2={card.color2} />

                  {/* Content */}
                  <div className="relative z-20 flex flex-col items-center pt-10 px-6 text-center">
                    <h3 className="text-white font-bold text-lg mb-3 tracking-wide">
                      {card.course}
                    </h3>
                    <div className={`px-5 py-1.5 flex items-center justify-center text-[13px] font-bold ${card.badgeBg} ${card.badgeText}`}>
                      {card.university}
                    </div>
                  </div>

                  {/* Image Placeholder - A standard unspalsh student image cut to fit over the background */}
                  <div className="absolute -bottom-1 left-0 w-full h-[65%] z-20 flex items-end justify-center">
                    <div className="w-[90%] h-[95%] overflow-hidden rounded-[120px_120px_0_0] drop-shadow-2xl">
                      <img
                        src={`https://images.unsplash.com/photo-${index === 0 ? '1539571696357-5a69c17a67c6' : index === 1 ? '1580489944761-15a19d654956' : '1531746020798-e6953c6e8e04'}?auto=format&fit=crop&w=400&q=80`}
                        alt="Student"
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;
