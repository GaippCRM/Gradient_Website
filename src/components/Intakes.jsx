import React from 'react';
import { CalendarDays, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const intakes = [
  { month: 'March 2026', status: 'View available courses' },
  { month: 'April 2026', status: 'View available courses' },
  { month: 'May 2026', status: 'View available courses' }
];

const Intakes = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-gray-50/50 rounded-[48px] my-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Upcoming Intakes</h2>
        <p className="text-gray-500 text-base mb-12">Plan your study journey with upcoming admission cycles for next year</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {intakes.map((intake, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -5, shadow: '0 20px 40px -10px rgba(0,0,0,0.08)' }}
              className="bg-white p-10 rounded-[32px] flex flex-col items-center shadow-sm border border-gray-100/50 transition-all cursor-pointer group"
            >
              <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 duration-300">
                <CalendarDays size={32} />
              </div>
              <h3 className="font-bold text-gray-800 text-lg px-4 py-1.5 rounded-full mb-4 bg-gray-50 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
                {intake.month}
              </h3>
              <p className="text-blue-600 font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                {intake.status} <ArrowRight size={16} />
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Intakes;
