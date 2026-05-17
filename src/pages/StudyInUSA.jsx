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

const usaSidebarData = {
  temperatureTitle: 'Temperature',
  temperatureSubtitle:
    "In the USA, you'll experience a temperate climate, with mild summers, cool winters, and frequent rainfall throughout the year.",
  temperatures: [
    { city: 'New York', range: '-3°C to 29°C' },
    { city: 'Los Angeles', range: '12°C to 24°C' },
    { city: 'Chicago', range: '-4°C to 28°C' },
    { city: 'Miami', range: '20°C to 31°C' },
  ],
  seasons: [
    { label: 'Spring', dates: 'Mar – May', emoji: '🌤' },
    { label: 'Summer', dates: 'Jun – Aug', emoji: '☀️' },
    { label: 'Autumn', dates: 'Sep – Nov', emoji: '🍂' },
    { label: 'Winter', dates: 'Dec – Feb', emoji: '🌨' },
  ],
  insights: [
    { label: 'Capital', value: 'Washington, D.C.', icon: MapPin },
    { label: 'Language', value: 'English', icon: Languages },
    { label: 'Time', value: 'UTC-08:00 to UTC-05:00', icon: Clock },
    { label: 'Currency', value: 'US Dollar (USD)', icon: CreditCard },
    { label: 'Population', value: '342M', icon: Flag },
    { label: 'Immigrants', value: '14%', icon: UserCheck },
  ],
};

const StudyInUSA = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = [
    { name: 'New York City', image: '/image/country/newyork.jpg' },
    { name: 'Boston', image: '/image/country/boston.jpg' },
    { name: 'Los Angeles', image: '/image/country/losangeles.jpg' },
    { name: 'San Francisco', image: '/image/country/sanfrancisco.jpg' },
  ];

  const usaSchemas = [
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
          "name": "Study in USA",
          "item": "https://gradient-edu.com/study-in-usa"
        }
      ]
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <SEO 
        title="Study in USA | Top Universities, Visas & Student Life - Gradient Edu"
        description="Start your study abroad journey in the USA. Comprehensive guide to top American universities, F1 student visas, campus life, part-time work, OPT guidelines, and costs."
        schemaMarkup={usaSchemas}
      />
      <HeroBanner
        title="Study in the USA with Gradient Edu"
        subtitle="Discover World-Class Education & Career Opportunities"
        bgImage="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?auto=format&fit=crop&q=80&w=2070"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 pb-20">
        <div className="bg-white rounded-t-3xl p-6 shadow-sm border-x border-t border-gray-100/50">
          <Breadcrumb
            items={[
              { label: 'Study in USA' },
            ]}
          />

          <CountryHeader
            flag="https://flagcdn.com/w160/us.png"
            name="USA"
            universityCount="289"
            buttonLabel="Explore universities"
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-10">
            {/* Left Column */}
            <div className="lg:w-2/3 space-y-12">

              {/* Intro */}
              <section id="intro">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Discover World-Class Education & Career Opportunities
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  The United States remains one of the most popular destinations for international students, characterized by a diverse range of globally recognized universities, cutting edge research programmes, and flexible academic pathways. With thousands of institutions and millions of international students across all 50 states, the U.S. offers unparalleled choice in study fields, campus experiences, and post-graduation opportunities. (<a href="https://opendoorsdata.org/annual-release/international-students/?utm_source=chatgpt.com" className="text-blue-500 hover:underline">IIE Open Doors</a>)
                </p>
              </section>

              {/* Why Choose USA */}
              <section id="why-choose" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose the USA?
                </h2>

                <div className="space-y-6">
                  <div id="academic-excellence">
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                      Academic excellence & variety
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      The U.S. hosts a broad mix of institutions, from large research universities to specialized colleges. This diversity enables students to pursue fields such as engineering, business, sciences, arts, and technology at multiple levels.
                    </p>
                  </div>

                  <div id="global-research">
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                      Global research & innovation environment
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      American universities are often hubs for research and innovation, giving students access to state of the art labs, internships, and industry collaborations.
                    </p>
                  </div>

                  <div id="cultural-immersion">
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">
                      Cultural immersion & networking
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      Studying in the U.S. lets you experience a multicultural environment and build international connections that last far beyond graduation.
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
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">F-1 Student Visa</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      To study for a full-time degree, international students must obtain an <strong className="font-bold text-gray-900">F-1 visa</strong> before travel. You'll need:
                    </p>
                    <ul className="list-disc pl-5 mt-3 space-y-2 text-gray-500 text-[15px]">
                      <li>
                        A confirmed offer of admission from a SEVP-certified U.S. institution. (<a href="https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html?utm_source=chatgpt.com" className="text-blue-500 hover:underline">travel.gov</a>)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">Work while studying</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      F-1 students may work on campus (up to 20 hours/week during term) and, after the first academic year, may become eligible for additional practical training options under strict U.S. rules. (<a href="https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment?utm_source=chatgpt.com" className="text-blue-500 hover:underline">uscis.gov</a>)
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">Post-graduation practical training</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      After completing your degree, F-1 students can apply for <strong className="font-bold text-gray-900">Optional Practical Training (OPT)</strong> — authorization to work in the U.S. for up to 12 months in a field related to your study, with a possible 24-month STEM extension for eligible subjects. (<a href="https://www.uscis.gov/working-in-the-united-states/students-and-exchange-visitors/students-and-employment?utm_source=chatgpt.com" className="text-blue-500 hover:underline">uscis.gov</a>)
                    </p>
                  </div>
                </div>
              </section>

              {/* Cost of Studying */}
              <section id="cost">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Cost of Studying
                </h2>

                <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                  Tuition and living costs vary widely depending on university type and location. On average:
                </p>

                <ul className="space-y-3 ml-6 list-disc text-gray-700 text-[15px] mb-4">
                  <li>
                    <strong className="font-bold text-gray-900">Undergraduate tuition:</strong> USD approx. $20,000 - $45,000 per year (public) and $50,000 - $80,000 (private). (<a href="https://www.aeccglobal.com/study-in-usa/cost-of-study?utm_source=chatgpt.com" className="text-blue-500 hover:underline">Study Overseas Consultants</a>)
                  </li>
                </ul>

                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Living expenses depend on the city and lifestyle but should be factored into planning along with accommodation, food, transport, and health insurance.
                </p>
              </section>

              {/* How Gradient Edu Helps You */}
              <section id="how-we-help">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  How Gradient Edu Helps You
                </h2>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                  At Gradient Edu, we guide you through each stage of the U.S. study journey — from choosing courses and universities to preparing your application and understanding visa requirements. Our portal allows you to:
                </p>
                <ul className="space-y-2 list-disc pl-5 text-gray-500 text-[15px]">
                  <li>Discover courses that match your goals</li>
                  <li>Shortlist universities and track your applications</li>
                  <li>Prepare documents with expert review</li>
                  <li>Navigate visa timelines and requirements</li>
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
                  Explore these USA cities where you can study and shape your bright future.
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

              {/* Ready to Start Your U.S. Journey */}
              <section id="get-started">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Ready to Start Your U.S. Journey?
                </h2>
                <div className="space-y-1.5 pl-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👉</span>
                    <Link to="/course-search" className="text-slate-600 underline underline-offset-4 hover:text-blue-600 transition-colors text-[15px]">
                      Search USA Courses
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
              <Sidebar {...usaSidebarData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInUSA;
