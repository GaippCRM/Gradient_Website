import React from 'react';
import { motion } from 'framer-motion';
import { UserPlus, Search, ClipboardList, Send, HeadphonesIcon } from 'lucide-react';

const steps = [
  { id: 1, title: 'Create Profile', desc: 'Tell us about your background and interests.', icon: UserPlus },
  { id: 2, title: 'Discover Courses', desc: 'Explore programs tailored to your profile.', icon: Search },
  { id: 3, title: 'Shortlist Universities', desc: 'Select the institutions that fit you best.', icon: ClipboardList },
  { id: 4, title: 'Submit & Track Applications', desc: 'Apply effortlessly and monitor your status in real-time.', icon: Send },
  { id: 5, title: 'Get Support', desc: 'Receive expert guidance every step until you enroll.', icon: HeadphonesIcon },
];

const Steps = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Simple Steps to Progress
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your seamless journey to studying abroad is mapped out in five simple steps. We handle the complexity so you can focus on your future.
          </p>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-200 to-purple-100 transform md:-translate-x-1/2 rounded-full hidden sm:block"></div>

          <div className="space-y-12">
            {steps.map((step, index) => {
              const ComponentIcon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col sm:flex-row items-start sm:items-center ${isEven ? 'sm:flex-row-reverse' : ''}`}
                >
                  <div className={`w-full sm:w-1/2 ${isEven ? 'sm:pl-12' : 'sm:pr-12 text-left sm:text-right'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                      <p className="text-gray-600">{step.desc}</p>
                    </div>
                  </div>
                  
                  {/* Timeline Badge */}
                  <div className="relative z-20 flex items-center justify-center w-12 h-12 bg-gradient-brand text-white rounded-full shadow-lg border-4 border-white my-4 sm:my-0 mx-auto sm:absolute sm:left-1/2 sm:-translate-x-1/2 transform scale-100 hover:scale-110 transition-transform shadow-blue-500/30">
                    <ComponentIcon size={20} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
