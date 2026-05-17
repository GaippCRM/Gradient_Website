import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import Breadcrumb from '../components/Breadcrumb';
import CountryHeader from '../components/CountryHeader';
import Sidebar from '../components/Sidebar';
import {
  Building2,
  Users,
  Flag,
  UserCheck,
  Clock,
  CreditCard,
  MapPin,
  Languages,
  Video,
  CheckCircle2,
  Star,
  Lightbulb,
} from 'lucide-react';

const australiaSidebarData = {
  temperatureTitle: 'Temperature',
  temperatureSubtitle:
    "In Australia, you'll experience a temperate climate, with mild summers, cool winters, and frequent rainfall throughout the year.",
  temperatures: [
    { city: 'Sydney', range: '12°C to 27°C' },
    { city: 'Melbourne', range: '10°C to 26°C' },
    { city: 'Brisbane', range: '15°C to 30°C' },
    { city: 'Perth', range: '12°C to 34°C' },
  ],
  seasons: [
    { label: 'Spring', dates: 'Mar – May', emoji: '🌤' },
    { label: 'Summer', dates: 'Jun – Aug', emoji: '☀️' },
    { label: 'Autumn', dates: 'Sep – Nov', emoji: '🍂' },
    { label: 'Winter', dates: 'Dec – Feb', emoji: '🌨' },
  ],
  insights: [
    { label: 'Capital', value: 'Canberra', icon: MapPin },
    { label: 'Language', value: 'English', icon: Languages },
    { label: 'Time', value: 'UTC+08:00 to UTC+11:00', icon: Clock },
    { label: 'Currency', value: 'Australian Dollar (AUD)', icon: CreditCard },
    { label: 'Population', value: '26.4M', icon: Flag },
    { label: 'Immigrants', value: '30%', icon: UserCheck },
  ],
};

const StudyInAustralia = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = [
    { name: 'Sydney', image: '/image/country/sydney.jpg' },
    { name: 'Melbourne', image: '/image/country/melbourne.jpg' },
    { name: 'Brisbane', image: '/image/country/brisbane.jpeg' },
    { name: 'Perth', image: '/image/country/perth.jpg' },
  ];

  const australiaSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://gradient-edu.com"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Study in Australia",
          "item": "https://gradient-edu.com/study-in-australia"
        }
      ]
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <SEO 
        title="Study in Australia | Top Universities, Costs & Work Visas - Gradient Edu"
        description="Your comprehensive guide to studying in Australia. Find top universities, standard intakes, student visa (subclass 500) requirements, costs, part-time work, and post-study visas."
        schemaMarkup={australiaSchemas}
      />
      <HeroBanner
        title="Study in Australia with Gradient Edu"
        subtitle="Experience Top-Quality Education & Work Opportunities"
        bgImage="https://images.unsplash.com/photo-1523482580672-f109ba8cb9be?auto=format&fit=crop&q=80&w=2070"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 pb-20">
        <div className="bg-white rounded-t-3xl p-6 shadow-sm border-x border-t border-gray-100/50">
          <Breadcrumb
            items={[
              { label: 'Study in Australia' },
            ]}
          />

          <CountryHeader
            flag="https://flagcdn.com/w160/au.png"
            name="Australia"
            universityCount="43"
            buttonLabel="Explore universities"
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-10">
            {/* Left Column */}
            <div className="lg:w-2/3 space-y-12">

              {/* Intro */}
              <section id="intro">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Experience Top-Quality Education & Work Opportunities
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Australia is a top destination for international students thanks to its <strong className="font-bold text-gray-900">high-quality universities, vibrant multicultural cities, and strong post-study work prospects</strong>. With some of the world's leading institutions and an education system recognised globally for academic excellence, Australia offers opportunities across STEM, business, healthcare, and creative fields. (<a href="https://edvoy.com/countries/study-in-australia/?utm_source=chatgpt.com" className="text-blue-500 hover:underline">Edvoy</a>)
                </p>
              </section>

              {/* Benefits of Studying */}
              <section id="why-choose" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Benefits of Studying in Australia
                </h2>

                <div className="space-y-6">
                  <div id="academic-quality">
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                      Academic quality & lifestyle
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      Australia consistently ranks among the world's leading higher-education destinations, with globally recognised degrees and supportive student services. (<a href="https://study-solutions.com/study-destinations/study-in-australia/?utm_source=chatgpt.com" className="text-blue-500 hover:underline">Study Solutions Ltd</a>)
                    </p>
                  </div>

                  <div id="work-while-study">
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                      Work while you study
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      International students can usually work part-time during study periods (up to 48 hours per fortnight) and full-time during breaks — helping you gain experience and support living costs. (<a href="https://edvoy.com/countries/study-in-australia/?utm_source=chatgpt.com" className="text-blue-500 hover:underline">Edvoy</a>)
                    </p>
                  </div>

                  <div id="post-study-work">
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                      Post-study work opportunities
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      After graduating, students may be eligible for a <strong className="font-bold text-gray-900">post-study work visa</strong> (generally 2–4 years depending on qualification level), offering time to gain professional experience in Australia. (<a href="https://edvoy.com/countries/study-in-australia/?utm_source=chatgpt.com" className="text-blue-500 hover:underline">Edvoy</a>)
                    </p>
                  </div>
                </div>
              </section>

              {/* Admissions & Visa */}
              <section id="admissions" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Admissions & Visa Essentials
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">Student Visa (Subclass 500)</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      To study in Australia, you must apply for a <strong className="font-bold text-gray-900">student visa and</strong> provide evidence of:
                    </p>
                    <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-[15px] mb-4">
                      <li>Enrollment in a registered course</li>
                      <li>Financial capacity</li>
                      <li>Health insurance through the Overseas Student Health Cover (OSHC) scheme (<a href="https://edvoy.com/countries/study-in-australia/?utm_source=chatgpt.com" className="text-blue-500 hover:underline">Edvoy</a>)</li>
                    </ul>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      Visa applications also require compliance with character and financial requirements set by Australia's Department of Home Affairs. (<a href="https://edvoy.com/countries/study-in-australia/?utm_source=chatgpt.com" className="text-blue-500 hover:underline">Edvoy</a>)
                    </p>
                  </div>
                </div>
              </section>

              {/* Cost of Studying */}
              <section id="cost">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Cost of Study & Living
                </h2>

                <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                  While tuition and living costs depend on your institution and city, typical living expenses include accommodation, food, transport, and health insurance. Some cities like Sydney and Melbourne tend to be higher in cost.
                </p>

                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Australia's supportive work policies and structured post-study pathways make it a strong choice for students planning both academic and career growth. (<a href="https://studyweg.com/study-in-australia/?utm_source=chatgpt.com" className="text-blue-500 hover:underline">StudyWeg</a>)
                </p>
              </section>

              {/* How Gradient Edu Helps You */}
              <section id="how-we-help">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  How Gradient Edu Helps You
                </h2>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                  We help you choose courses, shortlist universities, manage applications, and understand the Australian visa process — all via the Gradient Edu portal. Our advisors also provide personalised guidance on documentation and timelines.
                </p>
              </section>

              {/* Need Help */}
              <div className="p-8 bg-[#eef5ff] rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden relative group">
                <div className="flex items-center gap-6">
                  <div className="hidden md:block w-24 h-24 shrink-0">
                    <img
                      src="https://img.freepik.com/free-vector/video-calling-concept-illustration_114360-1558.jpg"
                      alt="Counselling Illustration"
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Need help?</h3>
                    <p className="text-gray-500 text-[15px] leading-relaxed max-w-md font-normal">
                      Hop onto a video counselling session with your dedicated counsellor to get all your queries answered.
                    </p>
                  </div>
                </div>
                <a 
                  href="https://wa.me/447892838321" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-white text-gray-700 rounded-full font-bold border border-gray-100 hover:border-blue-200 transition-all shadow-sm active:scale-95 whitespace-nowrap flex items-center gap-2"
                >
                  <Video size={18} className="text-gray-700" />
                  Book a session
                </a>
              </div>

              {/* Cities to Study */}
              <section id="cities">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Building2 className="text-gray-900" size={24} />
                  Cities to study
                </h3>
                <p className="text-gray-500 text-[15px] mb-8">
                  Explore these Australia cities where you can study and shape your bright future.
                </p>
                <div className="flex flex-wrap gap-10">
                  {cities.map((city, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-4 group cursor-pointer">
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-md group-hover:scale-105 group-hover:shadow-lg transition-all duration-300 bg-slate-50">
                        <img src={city.image} alt={city.name} className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-gray-700 group-hover:text-blue-600 transition-colors">{city.name}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Ready to Study in Australia */}
              <section id="get-started">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Ready to Study in Australia?
                </h2>
                <div className="space-y-1.5 pl-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👉</span>
                    <Link to="/course-search" className="text-slate-600 underline underline-offset-4 hover:text-blue-600 transition-colors text-[15px]">
                      Search Australia Courses
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👉</span>
                    <Link to="/student-signup" className="text-slate-600 underline underline-offset-4 hover:text-blue-600 transition-colors text-[15px]">
                      Create Your Free Gradient Edu Account
                    </Link>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👉</span>
                    <a
                      href="https://wa.me/447892838321"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 underline underline-offset-4 hover:text-blue-600 transition-colors text-[15px]"
                    >
                      Book Your Free Consultation
                    </a>
                  </div>
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <Sidebar {...australiaSidebarData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInAustralia;
