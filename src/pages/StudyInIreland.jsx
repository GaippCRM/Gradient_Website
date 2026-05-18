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

const irelandSidebarData = {
  temperatureTitle: 'Temperature',
  temperatureSubtitle:
    "In Ireland, you'll experience a temperate climate, with mild summers, cool winters, and frequent rainfall throughout the year.",
  temperatures: [
    { city: 'Dublin',   range: '2°C to 14°C' },
    { city: 'Cork',     range: '4°C to 14°C' },
    { city: 'Galway',   range: '5°C to 15°C' },
    { city: 'Limerick', range: '2°C to 13°C' },
  ],
  seasons: [
    { label: 'Spring', dates: 'Mar – May', emoji: '🌤' },
    { label: 'Summer', dates: 'Jun – Aug', emoji: '☀️' },
    { label: 'Autumn', dates: 'Sep – Nov', emoji: '🍂' },
    { label: 'Winter', dates: 'Dec – Feb', emoji: '🌨' },
  ],
  insights: [
    { label: 'Capital',    value: 'Dublin',               icon: MapPin },
    { label: 'Language',   value: 'English, Irish (Gaeilge)', icon: Languages },
    { label: 'Time',       value: 'UTC+00:00 or GMT+1',   icon: Clock },
    { label: 'Currency',   value: 'Euro (EUR)',           icon: CreditCard },
    { label: 'Population', value: '5M',                   icon: Flag },
    { label: 'Immigrants', value: '22%',                  icon: UserCheck },
  ],
};

const StudyInIreland = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = [
    { name: 'Dublin', image: '/image/country/dublin.jpg' },
    { name: 'Cork', image: '/image/country/cork.jpg' },
    { name: 'Galway', image: '/image/country/galway.jpg' },
    { name: 'Limerick', image: '/image/country/limerick.jpg' },
  ];

  const irelandSchemas = [
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
          "name": "Study in Ireland",
          "item": "https://gradient-edu.com/study-in-ireland"
        }
      ]
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <SEO 
        title="Study in Ireland | Top Universities, Fees & Intakes - Gradient Edu"
        description="Discover study abroad opportunities in Ireland. Learn about top-ranked Irish universities, degrees taught in English, cost of living, part-time jobs, and stay-back work rights."
        schemaMarkup={irelandSchemas}
      />
      <HeroBanner
        title="Study in Ireland with Gradient Edu"
        subtitle="Ireland — A Welcoming & Affordable Study Destination"
        bgImage="https://images.unsplash.com/photo-1590089415225-401ed6f9db8e?auto=format&fit=crop&q=80&w=2070" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 pb-20">
        <div className="bg-white rounded-t-3xl p-6 shadow-sm border-x border-t border-gray-100/50">
          <Breadcrumb
            items={[
               { label: 'Study in Ireland' },
            ]}
          />

          <CountryHeader
            flag="https://flagcdn.com/w160/ie.png"
            name="Ireland"
            universityCount="18"
            buttonLabel="Explore universities"
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-10">
            {/* Left Column */}
            <div className="lg:w-2/3 space-y-12">

              {/* Intro */}
              <section id="intro">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Ireland — A Welcoming & Affordable Study Destination
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Ireland is rapidly gaining popularity among international students for its globally recognised degrees, English-medium programmes, and vibrant cultural environment. With strong traditions in technology, pharmaceuticals, business, and creative sectors, Ireland offers both quality education and real work experience opportunities. (<a href="https://edvoy.com/countries/study-in-ireland/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Edvoy</a>)
                </p>
              </section>

              {/* Why Choose Ireland */}
              <section id="why-choose" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What Makes Ireland Attractive?
                </h2>

                <div className="space-y-6">
                  <div id="english-taught">
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                      English-taught programmes
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      Most degree programmes in Ireland are offered in English, making the transition for international students smoother.
                    </p>
                  </div>

                  <div id="work-flexibility">
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                      Work flexibility during study
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      Students typically can work part-time (up to 20 hours per week) while studying — helping support living costs and build experience. (<a href="https://edvoy.com/countries/study-in-ireland/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Edvoy</a>)
                    </p>
                  </div>

                  <div id="post-study-work">
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                      Post-study work rights
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      After completing a degree at a recognised Irish institution, graduates may be eligible to stay and work for up to 12 months or more depending on their level of qualification. (<a href="https://edvoy.com/countries/study-in-ireland/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Edvoy</a>)
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
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">Student Visa & Residency</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      To study in Ireland, you'll need a student visa and, on arrival, a residence permit that covers the duration of your programme. This process ensures you can study, work part-time, and access local services legally. (<a href="https://edvoy.com/countries/study-in-ireland/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Edvoy</a>)
                    </p>
                  </div>
                </div>
              </section>

              {/* Cost of Living & Tuition */}
              <section id="cost">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Cost of Living & Tuition
                </h2>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                  Tuition costs and living expenses vary by institution and city, but planning ahead helps you understand how accommodation, food, transport, and insurance fit into your budget. (<a href="https://edvoy.com/countries/study-in-ireland/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Edvoy</a>)
                </p>
              </section>

              {/* How Gradient Edu Helps You */}
              <section id="how-we-help">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  How Gradient Edu Helps You
                </h2>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                  Through our platform and guidance, you can:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-gray-500 text-[15px]">
                  <li>Search for Irish courses and universities</li>
                  <li>Shortlist options that match your goals</li>
                  <li>Start and track applications online</li>
                  <li>Get tailored advice on documents, visa, and compliance</li>
                </ul>
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
                  Explore these Ireland cities where you can study and shape your bright future.
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

              {/* Ready to Study */}
              <section id="get-started">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Ready to Study in Ireland?
                </h2>
                <div className="space-y-1.5 pl-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👉</span>
                    <Link to="/course-search" className="text-slate-600 underline underline-offset-4 hover:text-blue-600 transition-colors text-[15px]">
                      Search Ireland Courses
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
                      Book a Free Study Consultation
                    </a>
                  </div>
                </div>
              </section>

            </div>

            {/* Sidebar */}
            <div className="lg:w-1/3">
              <Sidebar {...irelandSidebarData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInIreland;
