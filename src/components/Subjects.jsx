import React from 'react';
import { Database, Briefcase, HeartPulse, Cpu, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

const subjects = [
  { icon: Database, name: 'Data Science', count: '20+ courses', color: 'bg-blue-100/60 text-blue-600' },
  { icon: Briefcase, name: 'Business', count: '45+ courses', color: 'bg-fuchsia-100/60 text-fuchsia-600' },
  { icon: HeartPulse, name: 'Nursing', count: '40+ courses', color: 'bg-orange-100/60 text-orange-600' },
  { icon: Cpu, name: 'Artificial Intelligence', count: '15+ courses', color: 'bg-indigo-100/60 text-indigo-600' },
  { icon: Wrench, name: 'Engineering', count: '5+ courses', color: 'bg-green-100/60 text-green-600' }
];

const Subjects = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Subjects</h2>
        <p className="text-gray-500 text-lg mb-12">Explore top fields of study from universities worldwide</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {subjects.map((sub, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -8, shadow: '0 20px 40px -12px rgba(0,0,0,0.1)' }}
              className="bg-white border border-gray-100 p-8 rounded-2xl flex flex-col items-center justify-center transition-all cursor-pointer group hover:border-blue-100"
            >
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110 duration-300 ${sub.color}`}>
                <sub.icon size={28} />
              </div>
              <h3 className="font-bold text-gray-900 text-base mb-1.5 text-center group-hover:text-blue-600 transition-colors uppercase tracking-tight">{sub.name}</h3>
              <p className="text-gray-400 text-sm font-medium">{sub.count}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Subjects;
