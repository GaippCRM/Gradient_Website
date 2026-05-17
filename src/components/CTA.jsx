import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ctaCards = [
  { 
    id: 1, 
    type: 'Students', 
    title: "We'll guide you to your dream course — from course selection to campus life.",
    button: 'Sign up', 
    link: '/student-signup',
    image: '/image/student_cta.jpg' 
  },
  { 
    id: 2, 
    type: 'Agents', 
    title: 'Get support to admit qualified students and earn great commissions.',
    button: 'Become a partner', 
    link: '/agent-register',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80' 
  },
  { 
    id: 3, 
    type: 'Institutions', 
    title: 'Increase your reach and get higher ROI by partnering with us.',
    button: 'Become a partner', 
    link: '/institution-register',
    image: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=600&q=80' 
  },
];

const CTA = () => {
  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Start your journey <span className="text-blue-600">with us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ctaCards.map((card, index) => (
            <motion.div 
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col group h-full"
            >
              <div className="h-48 md:h-56 overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.type} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <span className="text-blue-600 font-bold mb-3">{card.type}</span>
                <p className="text-gray-900 text-lg font-medium leading-relaxed mb-8 flex-grow">
                  {card.title}
                </p>
                <Link to={card.link} className="w-full py-3 px-6 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-semibold shadow-md shadow-blue-600/20 text-center block">
                  {card.button}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CTA;
