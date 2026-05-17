import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight, CheckCircle2, FileText, Activity, ShieldCheck,
  Globe2, Briefcase, BarChart, Users, Bell, Blocks,
  Search, UserPlus, Phone, Play, Scale, Zap, Heart, Menu, Mail, User
} from 'lucide-react';
import Providers from '../components/Providers';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white min-h-screen">

      {/* 1. HERO SECTION (Orbital Layout) */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-blue-50/30 -z-10" />
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay -z-10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] -z-10"></div>

        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-16 lg:mb-0 relative z-10"
          >
            <h1 className="text-4xl md:text-5xl lg:text-[54px] font-extrabold text-gray-900 leading-[1.1] mb-6 tracking-tight">
              The All-in-One <br /> Platform for Your <br /> Study Abroad <br /> Journey
            </h1>
            <p className="text-[15px] font-medium text-gray-500 leading-relaxed mb-8 max-w-lg">
              Gradient Edu brings together expert guidance and powerful technology to help students navigate the study abroad process with confidence and clarity. Our platform is designed to support you every step of the way - from researching courses and shortlisting universities to submitting applications and tracking progress online. Whether you're just beginning your journey or managing multiple applications at once, Gradient Edu gives you everything you need in one place.
            </p>
            <Link to="/student-signup" className="inline-block px-8 py-3 bg-[#4F46E5] text-white rounded font-semibold hover:bg-[#4338ca] transition-colors shadow-lg shadow-blue-600/20 active:scale-95 text-[15px] text-center">
              Get Started
            </Link>
          </motion.div>

          {/* Right Orbital Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full flex items-center justify-center"
          >
            {/* Concentric Circles */}
            <div className="absolute w-[280px] h-[280px] md:w-[320px] md:h-[320px] border border-orange-200 rounded-full animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-[360px] h-[360px] md:w-[440px] md:h-[440px] border border-indigo-400 rounded-full animate-[spin_80s_linear_infinite_reverse]" />
            <div className="absolute w-[460px] h-[460px] md:w-[580px] md:h-[580px] border border-orange-200 rounded-full animate-[spin_100s_linear_infinite]" />
            <div className="absolute w-[560px] h-[560px] md:w-[760px] md:h-[760px] border border-orange-200/60 rounded-full animate-[spin_120s_linear_infinite_reverse]" />

            {/* Central Hub Image */}
            <div className="w-[180px] h-[180px] md:w-[220px] md:h-[220px] rounded-full overflow-hidden border-[6px] border-white shadow-xl relative z-10 bg-white">
              <img
                src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&q=80&w=800"
                alt="University Campus"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Cards (Outer Ring: Top-Right) */}
            <div className="absolute top-[8%] right-[2%] md:right-[-5%] bg-white rounded-xl flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-30 pr-4 pl-10 py-2 hover:scale-105 transition-transform duration-300 pointer-events-auto">
              {/* Avatar protruding left */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow-sm overflow-hidden w-[52px] h-[52px]">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80" alt="Student" className="w-full h-full object-cover" />
              </div>

              <div className="flex bg-red-500 rounded text-white font-bold text-[8px] tracking-wider px-1.5 py-1 justify-center items-center h-7 w-7">
                PDF
              </div>
              <div className="flex flex-col pr-4 border-r border-gray-100">
                <p className="text-[11px] font-bold text-gray-900 leading-tight">Documents added</p>
                <p className="text-[10px] text-gray-500">University of Exeter, UK</p>
              </div>
              {/* Progress Ring */}
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full border-[3px] border-blue-100 border-t-blue-600 border-r-blue-600 shrink-0 transform -rotate-45" />
                <span className="text-blue-600 font-bold text-xs">79%</span>
              </div>
            </div>

            {/* Floating Cards (Mid Ring: Left) */}
            <div className="absolute top-[48%] left-[0%] md:-left-[10%] bg-white rounded-xl flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-30 pr-4 pl-10 py-2 hover:scale-105 transition-transform duration-300 pointer-events-auto">
              {/* Avatar protruding left */}
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow-sm overflow-hidden w-[52px] h-[52px] bg-white">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80" alt="Student" className="w-full h-full object-cover" />
              </div>

              <div className="flex bg-green-500 rounded text-white justify-center items-center h-7 w-7 shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="23 7 16 12 23 17 23 7"></polygon><rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect></svg>
              </div>
              <div className="flex flex-col">
                <p className="text-[11px] font-bold text-gray-900 leading-tight">Start a call</p>
                <p className="text-[10px] text-gray-500">and get all details</p>
              </div>
            </div>

            {/* Floating Cards (Outer Ring: Bottom-Right) */}
            <div className="absolute bottom-[10%] right-[5%] md:right-[-2%] bg-white rounded-xl flex items-center gap-3 shadow-[0_8px_30px_rgb(0,0,0,0.08)] z-30 pr-4 pl-10 py-2 hover:scale-105 transition-transform duration-300 pointer-events-auto">
              <div className="absolute -left-6 top-1/2 -translate-y-1/2 rounded-full border-4 border-white shadow-sm overflow-hidden w-[52px] h-[52px] bg-white">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=150&q=80" alt="Student" className="w-full h-full object-cover" />
              </div>

              <div className="flex bg-gray-900 rounded text-white justify-center items-center h-7 w-7 shrink-0">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
              </div>
              <div className="flex flex-col pr-4 border-r border-gray-100">
                <p className="text-[11px] font-bold text-gray-900 leading-tight">BSc Engineering</p>
                <p className="text-[10px] text-gray-500">University of Regina, Canada</p>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full border-[3px] border-blue-100 border-t-blue-600 border-r-blue-600 border-l-blue-600 shrink-0 transform -rotate-45" />
                <span className="text-blue-600 font-bold text-xs">90%</span>
              </div>
            </div>

            {/* Secondary Decor Avatars (without cards) */}
            <div className="absolute top-[20%] left-[25%] rounded-full border-2 border-white shadow-md overflow-hidden w-[46px] h-[46px] z-20">
              <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80" alt="Student" className="w-full h-full object-cover" />
            </div>
            <div className="absolute bottom-[25%] left-[30%] rounded-full border-2 border-white shadow-md overflow-hidden w-[42px] h-[42px] z-20">
              <img src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80" alt="Student" className="w-full h-full object-cover" />
            </div>
            <div className="absolute top-[45%] right-[15%] rounded-full border-2 border-white shadow-md overflow-hidden w-[40px] h-[40px] z-20">
              <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=150&q=80" alt="Student" className="w-full h-full object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. GLOBAL PLATFORM FEATURES */}
      <section className="py-20 border-t border-gray-100 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-2xl">
          <p className="text-[#4F46E5] font-semibold uppercase tracking-widest text-[17px] mb-4">EDVOY INTRODUCERS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">A global platform for all <br className="hidden md:block" /> your business needs.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {/* Feature 1 */}
          <div>
            <div className="w-12 h-12 bg-[#4F46E5] rounded-xl flex items-center justify-center mb-8 shadow-sm">
              <Globe2 className="text-white" size={22} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Competitive commission rates</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              We offer highly competitive commission rates compared with other market players. Enjoy peace of mind with transparent commission tracking and timely payouts.
            </p>
          </div>
          {/* Feature 2 */}
          <div>
            <div className="w-12 h-12 bg-[#4F46E5] rounded-xl flex items-center justify-center mb-8 shadow-sm">
              <Scale className="text-white" size={22} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Dedicated support team</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              As a Gradient Edu Introducer, you'll have access to our dedicated team of recruitment experts to support you and your students throughout the entire Student journey.
            </p>
          </div>
          {/* Feature 3 */}
          <div>
            <div className="w-12 h-12 bg-[#4F46E5] rounded-xl flex items-center justify-center mb-8 shadow-sm">
              <Zap className="text-white" size={22} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-4">Fast and compliant applications</h3>
            <p className="text-gray-500 text-[15px] leading-relaxed">
              Get better conversions and response times through our centralised documents and application processing process. Easily apply to many institutions and stay up to date in real time.
            </p>
          </div>
        </div>
      </section>

      {/* 3. EDUCATION PROVIDERS BANNER */}
      <Providers />

      {/* 4. WHAT WE OFFER */}
      <section className="py-24 bg-gray-50/50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12">What We Offer</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-[19px] font-medium text-gray-900 mb-4 tracking-tight">Smart Student Profiles</h3>
                <p className="text-gray-500 text-[15px] leading-[1.6]">
                  Create a complete student profile with your academic history, preferences, and documents in one secure dashboard — keeping everything organised and accessible.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-[19px] font-medium text-gray-900 mb-4 tracking-tight">Stay Organised</h3>
                <p className="text-gray-500 text-[15px] leading-[1.6]">
                  Keep tasks on track with built-in task management and immediate notifications. Never miss a deadline or message from a university again.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-[19px] font-medium text-gray-900 mb-4 tracking-tight">Explore Courses & Universities</h3>
                <p className="text-gray-500 text-[15px] leading-[1.6]">
                  Search thousands of international courses and programmes across leading destinations like the UK, USA, Canada, Europe, and beyond. Our intuitive course finder makes it easy to discover options that match your academic interests and career ambitions.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-[19px] font-medium text-gray-900 mb-4 tracking-tight">Shortlist & Compare</h3>
                <p className="text-gray-500 text-[15px] leading-[1.6]">
                  Easily shortlist your favourite universities and programmes. Compare entry requirements, locations, fees, and more — so you make informed decisions at every step.
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow flex flex-col justify-between">
              <div>
                <h3 className="text-[19px] font-medium text-gray-900 mb-4 tracking-tight">Start & Track Applications</h3>
                <p className="text-gray-500 text-[15px] leading-[1.6]">
                  Easily shortlist universities and programmes. Compare entry requirements, locations, fees, and more for informed decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. EVERYTHING YOU NEED */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">

          <div className="lg:col-span-5 mb-12 lg:mb-0">
            <p className="text-[#4F46E5] font-semibold uppercase tracking-widest text-[16px] mb-4">Everything You Need</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">All in one place.</h2>
            <p className="text-gray-500 text-[15px] leading-relaxed max-w-md">
              We've crafted a set of modern features designed to save you time and make managing the study abroad process a breeze.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-12">

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#4F46E5] rounded-lg shadow-sm flex items-center justify-center shrink-0">
                  <Users className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">Student Profiles</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">Easily view your students academic history, study preferences and documents.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#4F46E5] rounded-lg shadow-sm flex items-center justify-center shrink-0">
                  <Search className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">Course Finder</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">We have thousands of courses for you to discover and research with your students.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#4F46E5] rounded-lg shadow-sm flex items-center justify-center shrink-0">
                  <Heart className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">Shortlisting</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">Simple course shortlisting to help your students find their dream course.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#4F46E5] rounded-lg shadow-sm flex items-center justify-center shrink-0">
                  <FileText className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">Applications</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">Easily apply and track your students applications and documents all with real time updates.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#4F46E5] rounded-lg shadow-sm flex items-center justify-center shrink-0">
                  <Menu className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">Manage tasks</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">Stay organised with robust task management that's fast and flexible.</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <div className="w-10 h-10 bg-[#4F46E5] rounded-lg shadow-sm flex items-center justify-center shrink-0">
                  <Mail className="text-white w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-[15px] font-bold text-gray-900 mb-2">Instant Notifications</h4>
                  <p className="text-[13px] text-gray-500 leading-relaxed">Stay in the loop with instant notifications throughout the whole application process.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* 6. SPLIT BLOCKS (Why Gradient & Supporting You) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">

          {/* Why Gradient? */}
          <div className="lg:grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-2xl overflow-hidden shadow-xl mb-10 lg:mb-0 h-[350px] lg:h-[420px] w-full">
              <img
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=1200"
                alt="Students holding books" className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-[40px] font-normal text-gray-900 mb-6 tracking-tight">Why Gradient Edu?</h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                Gradient Edu integrates human expertise with modern digital tools so that you spend less time worrying and more time planning your future. Our team of international education specialists brings <strong className="font-semibold text-gray-700">30+ years of combined experience</strong> in recruitment, admissions, and compliance — helping you avoid common pitfalls and boost your chances of success.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                We work with students at every stage: from first-time explorers to applicants with multiple offers in hand.
              </p>
            </div>
          </div>

          {/* Supporting You */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mt-16">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-[40px] font-normal text-gray-900 mb-6 tracking-tight leading-tight">Supporting You From Start to <br className="hidden md:block" /> Success</h2>
              <p className="text-gray-500 text-[15px] leading-relaxed mb-6">
                At Gradient Edu, we understand that studying abroad is more than a checklist it's a life-changing journey. That's why we combine personalised guidance with a platform that gives you transparency and control over your goals.
              </p>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Whether you're exploring options, submitting applications, or preparing for visa processes and arrival plans, Gradient Edu is here with you - every step of the way.
              </p>
            </div>
            <div className="order-1 lg:order-2 rounded-2xl overflow-hidden shadow-xl h-[350px] lg:h-[420px] w-full">
              <img
                src="/supporting-you.png"
                alt="Student on laptop" className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* 7. JOIN OUR NETWORK TIMELINE */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16 items-start">

          <div className="lg:col-span-5 mb-16 lg:mb-0 lg:pr-6">
            <p className="text-[#4F46E5]/90 font-semibold uppercase tracking-widest text-[12px] mb-5">BECOME AN INTRODUCER</p>
            <h2 className="text-3xl md:text-[38px] font-bold text-gray-900 mb-8 leading-tight tracking-tight">
              Join our network and<br className="hidden xl:block" /> help make education<br className="hidden xl:block" /> truly global.
            </h2>
            <p className="text-[#6B7280] text-[15.5px] leading-[1.7] mb-6">
              Join our network of over 1,000 recruitment<br className="hidden xl:block" /> partners and counting.
            </p>
            <p className="text-[#6B7280] text-[15.5px] leading-[1.7]">
              Our onboarding process is simple and<br className="hidden xl:block" /> straightforward and our team of experts will guide<br className="hidden xl:block" /> you every step of the way.
            </p>
          </div>

          <div className="lg:col-span-6 lg:col-start-7 xl:pl-8">
            {/* Timeline Wrapper */}
            <div className="relative border-l border-gray-200 ml-6 lg:ml-8 space-y-16 pb-2">

              {/* Step 1 */}
              <div className="relative pl-12 md:pl-16 -mt-4">
                <div className="absolute w-[46px] h-[46px] rounded-full bg-white border border-gray-200 -left-[23px] top-0 shadow-sm flex items-center justify-center"></div>
                <h3 className="text-[17px] font-normal text-gray-900 mb-3 pt-2">Get in touch</h3>
                <p className="text-[#848A96] text-[14.5px] leading-[1.7] max-w-lg">
                  Submit your interest to get started and a member of our partnerships team will be in touch. Discuss the benefits of joining the our network of introducers.
                </p>
              </div>

              {/* Step 2 */}
              <div className="relative pl-12 md:pl-16">
                <div className="absolute w-[46px] h-[46px] rounded-full bg-white border border-gray-200 -left-[23px] top-0 shadow-sm flex items-center justify-center"></div>
                <h3 className="text-[17px] font-normal text-gray-900 mb-3 pt-2">Apply and get verified</h3>
                <p className="text-[#848A96] text-[14.5px] leading-[1.7] max-w-lg">
                  We have a straightforward online application process where we'll ask you about your business so we can verify your account ang get you setup.
                </p>
              </div>

              {/* Step 3 */}
              <div className="relative pl-12 md:pl-16">
                <div className="absolute w-[46px] h-[46px] rounded-full bg-white border border-gray-200 -left-[23px] top-0 shadow-sm flex items-center justify-center"></div>
                <h3 className="text-[17px] font-normal text-gray-900 mb-3 pt-2">You're all setup</h3>
                <p className="text-[#848A96] text-[14.5px] leading-[1.7] max-w-lg">
                  Once verified and approved, you'll be invited to access our online platform where you'll be able to start managing your students. All in one place.
                </p>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 8. READY TO GRADIENT / CTA BANNER */}
      <section className="pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#eef4ff] to-[#f4eafd] rounded-[1.5rem] p-12 lg:p-20 relative overflow-hidden flex flex-col items-center lg:items-start text-center lg:text-left justify-center min-h-[460px]">

          {/* Decorative Paper Airplane (Positioned on the right side) */}
          <div className="absolute right-[-10%] lg:right-[5%] bottom-[5%] lg:bottom-[15%] w-[350px] lg:w-[450px] opacity-40 lg:opacity-100 pointer-events-none transition-transform hover:scale-105 duration-500">
            <img src="/cta-image.png" alt="Paper Airplane graphic" className="w-full h-auto object-cover rounded-[3rem] shadow-2xl border-4 border-white/50" />
          </div>

          <div className="relative z-10 w-full max-w-xl flex flex-col items-center text-center mx-auto lg:ml-20">
            <h2 className="text-3xl md:text-[42px] font-normal text-[#1F2937] mb-3 flex flex-wrap items-center justify-center gap-x-2">
              Ready to <span className="text-blue-500 italic font-serif text-[46px] tracking-tight">Get started?</span>
            </h2>
            <p className="text-[#6B7280] mb-8 text-[15px] max-w-[440px] leading-[1.7]">
              Start exploring your global education journey today — find your course, shortlist universities, and manage your applications with confidence.
            </p>

            <div className="flex flex-col gap-3.5 w-full max-w-[320px]">
              <Link to="/course-search" className="w-full px-5 py-3 bg-transparent text-blue-600 font-medium rounded-full border border-blue-400 hover:border-blue-500 hover:bg-blue-50/50 transition-all flex items-center justify-center gap-2 text-[14px]">
                <Search size={18} />
                Search Courses
              </Link>

              <Link to="/student-signup" className="w-full px-5 py-3 bg-[#374151] text-white font-medium rounded-full shadow-lg hover:bg-[#1f2937] transition-all flex items-center justify-center gap-2 text-[14px]">
                <User size={18} />
                Create Your Free Account
              </Link>

              <a href="https://wa.me/447892838321" target="_blank" rel="noopener noreferrer" className="w-full px-5 py-3 bg-[#374151] text-white font-medium rounded-full shadow-lg hover:bg-[#1f2937] transition-all flex items-center justify-center gap-2 text-[14px]">
                <Phone size={18} />
                Book a Free Counselling Session
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
