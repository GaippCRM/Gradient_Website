import React from 'react';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const stats = [
  { value: '500+', label: 'Institutions' },
  { value: '50,000+', label: 'Courses' },
  { value: '5+', label: 'Destinations' },
  { value: '20+', label: 'Years of Experience' }
];

const CTASection = () => {
  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-700 rounded-[48px] overflow-hidden flex flex-col lg:flex-row relative shadow-2xl shadow-blue-200/50"
      >
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-[120px] -z-0 pointer-events-none translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-400/20 rounded-full blur-[100px] -z-0 pointer-events-none -translate-x-1/4 translate-y-1/4"></div>

        <div className="p-10 md:p-16 lg:w-3/5 flex flex-col justify-center z-10 text-white relative">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 border border-white/20 bg-white/10 backdrop-blur-md rounded-full px-5 py-2 text-sm font-semibold mb-8 self-start"
          >
            <ArrowUpRight size={18} className="text-blue-200" /> Start Your Journey Today
          </motion.div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-[1.1] tracking-tight">
            Ready to Find Your <br /> Perfect Course?
          </h2>
          <p className="text-blue-100 text-lg md:text-xl mb-10 max-w-xl leading-relaxed opacity-90">
            Join thousands of students who found their dream university using our data-driven platform. Get personalized recommendations in minutes.
          </p>

          <div className="flex flex-wrap gap-5 mb-16">
            <Link to="/student-signup" className="bg-white text-blue-700 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2 group justify-center text-center">
              Get Started Free <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a 
              href="https://wa.me/447892838321" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 hover:border-white transition-all inline-flex items-center justify-center"
            >
              Talk to Counselor
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-white/10">
            {stats.map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <h4 className="text-3xl font-extrabold mb-1">{stat.value}</h4>
                <p className="text-sm text-blue-200 font-medium uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:w-2/5 relative min-h-[400px] lg:min-h-full overflow-hidden p-8 lg:p-12 flex items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative w-full h-[400px] lg:h-full z-10"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
              alt="Students with counselor"
              className="w-full h-full object-cover rounded-[32px] shadow-2xl border-4 border-white/10"
            />
            {/* Soft gradient overlay on image */}
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent rounded-[32px]"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
