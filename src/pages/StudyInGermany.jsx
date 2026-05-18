import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import Breadcrumb from '../components/Breadcrumb';
import CountryHeader from '../components/CountryHeader';
import Sidebar from '../components/Sidebar';
import FAQAccordion from '../components/FAQAccordion';
import {
  Building2,
  Users,
  Flag,
  UserCheck,
  Clock,
  CreditCard,
  MapPin,
  Languages,
  Smile,
  Video,
  CheckCircle2,
  Star,
  Lightbulb,
} from 'lucide-react';

const germanySidebarData = {
  temperatureTitle: 'Temperature',
  temperatureSubtitle:
    "In the Germany, you'll experience a temperate climate, with mild summers, cool winters, and frequent rainfall throughout the year.",
  temperatures: [
    { city: 'Berlin', range: '1°C to 15°C' },
    { city: 'Munich', range: '-1°C to 8°C' },
    { city: 'Frankfurt', range: '1°C to 12°C' },
    { city: 'Hamburg', range: '1°C to 15°C' },
  ],
  seasons: [
    { label: 'Spring', dates: 'Mar – May', emoji: '🌤' },
    { label: 'Summer', dates: 'Jun – Aug', emoji: '☀️' },
    { label: 'Autumn', dates: 'Sep – Nov', emoji: '🍂' },
    { label: 'Winter', dates: 'Dec – Feb', emoji: '🌨' },
  ],
  insights: [
    { label: 'Capital', value: 'Berlin', icon: MapPin },
    { label: 'Language', value: 'German', icon: Languages },
    { label: 'Time', value: 'UTC+01:00 or GMT+2', icon: Clock },
    { label: 'Currency', value: 'Euro (EUR)', icon: CreditCard },
    { label: 'Population', value: '83M', icon: Flag },
    { label: 'Immigrants', value: '18%', icon: UserCheck },
  ],
};

const StudyInGermany = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const faqs = [
    {
      question: "Is studying in Germany really free for international students?",
      answer:
        "Public universities in Germany charge little to no tuition fees for both domestic and international students. However, you may need to pay a semester contribution of around €150–€350 for administrative services and public transport pass.",
    },
    {
      question: "What language are courses taught in Germany?",
      answer:
        "Many universities offer bachelor's and master's programs in English. However, knowing basic German is helpful for daily life. You can also find full German-taught programs.",
    },
    {
      question: "Can I stay in Germany after graduation?",
      answer:
        "Yes. Germany offers an 18-month post-study visa ('Job Seeker Visa') allowing graduates to stay and look for a job related to their field of study.",
    },
  ];

  const cities = [
    { name: 'Berlin', image: '/image/country/berlin.jpg' },
    { name: 'Munich', image: '/image/country/munich.jpg' },
    { name: 'Frankfurt', image: '/image/country/frankfurt.jpg' },
    { name: 'Hamburg', image: '/image/country/hamburg.jpg' },
  ];

  const germanySchemas = [
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
          "name": "Study in Germany",
          "item": "https://gradient-edu.com/study-in-germany"
        }
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  ];

  return (
    <div className="bg-[#fcfcfd] min-h-screen">
      <SEO 
        title="Study in Germany | Top Free Universities & Blocked Account Guide - Gradient Edu"
        description="Learn about studying in Germany. Guide to top public universities, free tuition programs, blocked account requirements (€11,904/year), student visa essentials, and career opportunities."
        schemaMarkup={germanySchemas}
      />
      <HeroBanner
        title="Study in Germany with Gradient Edu"
        subtitle="Discover World-Class Education in the Heart of Europe"
        bgImage="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&q=80&w=2070"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 pb-20">
        <div className="bg-white rounded-t-3xl p-6 shadow-sm border-x border-t border-gray-100/50">
          <Breadcrumb
            items={[
              { label: 'Study in Germany' },
            ]}
          />

          <CountryHeader
            flag="https://flagcdn.com/w160/de.png"
            name="Germany"
            universityCount="400"
            buttonLabel="Explore Universities"
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-10">
            {/* Left Column */}
            <div className="lg:w-2/3 space-y-12">

              {/* Intro */}
              <section id="intro">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Discover World-Class Education in the Heart of Europe
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                  Germany is one of the most sought-after destinations for international students — offering high-quality education, strong career prospects, and cultural experiences in the heart of Europe. With a combination of globally recognised universities, affordable education options, and vibrant student life, Germany presents an excellent path for students pursuing undergraduate, graduate, or professional programmes. (<a href="https://www.britannicaoverseas.com/study-in-germany?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Britannica Overseas Education</a>)
                </p>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Gradient Edu helps you navigate every step of your study-in-Germany journey — from course exploration and university shortlisting to applications, visas, and pre-departure support.
                </p>
              </section>

              {/* Why Choose Germany */}
              <section id="why-choose" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose Germany?
                </h2>

                <div className="space-y-6">
                  {/* World-Class Universities */}
                  <div id="universities">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      World-Class Universities & Quality Education
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      Germany is home to hundreds of highly ranked universities and research institutions offering programmes in fields like engineering, business, sciences, humanities, and more. Many public universities have little to no tuition fees for both EU and non-EU students, making education both prestigious and affordable. (<a href="https://www.britannicaoverseas.com/study-in-germany?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Britannica Overseas Education</a>)
                    </p>
                  </div>

                  {/* Affordable Cost */}
                  <div id="affordable">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      Affordable Cost of Living & Education
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      Compared to many global study destinations, Germany offers lower living costs — with average monthly expenses (including housing, food, transport, and insurance) typically ranging between €850 – €1,200. (<a href="https://www.msmunify.com/study-in-germany/cost-of-studying/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">MSM Unify</a>)
                    </p>
                  </div>

                  {/* International Community */}
                  <div id="community">
                    <h3 className="text-lg font-bold text-gray-900 mb-3">
                      International & Supportive Community
                    </h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      Germany hosts a large international student population, creating an inclusive environment where students from around the world connect, learn, and grow. Universities also provide student support services, orientation programmes, and social activities. (<a href="https://education.ec.europa.eu/study-in-europe/country-profiles/all-country-profiles/germany" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">European Education Area</a>)
                    </p>
                  </div>
                </div>
              </section>

              {/* Admissions & Visa */}
              <section id="admissions" className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  What You'll Need: Admissions & Visa Essentials
                </h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">Academic Requirements</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      Applications typically include your academic transcripts, personal statement, letters of recommendation, and, where required, English or German language test scores. Use Gradient Edu's portal to organise and check your documents for accuracy and completeness.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">Visa & Financial Proof</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                      Non-EU/EEA students must apply for a German Student Visa before arrival. A key requirement is demonstrating proof of sufficient financial resources — usually via a blocked account with funds to cover approximately €992 per month (about €11,904 per year). (<a href="https://www.daad.de/en/studying-in-germany/living-in-germany/finances/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">DAAD</a>)
                    </p>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      Gradient Edu provides step-by-step advice on preparing your visa application, understanding financial prerequisites, and navigating embassy procedures.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-[16px] font-bold text-gray-900 mb-3">Health Insurance</h3>
                    <p className="text-gray-500 leading-relaxed text-[15px]">
                      Health insurance is mandatory for all students in Germany. Once enrolled, students typically transition to local public or recognised private plans as part of maintaining visa status. (<a href="https://www.britannicaoverseas.com/study-in-germany?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Britannica Overseas Education</a>)
                    </p>
                  </div>
                </div>
              </section>

              {/* Cost of Studying */}
              <section id="cost">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Cost of Studying in Germany
                </h2>

                <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                  Most public universities do not charge tuition for bachelor's and many master's programmes, though you may need to pay a semester contribution fee that supports student services and transport. (<a href="https://education.ec.europa.eu/study-in-europe/country-profiles/all-country-profiles/germany" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">European Education Area</a>)
                </p>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                  Living costs vary by city and lifestyle, but here's a snapshot of typical monthly expenses:
                </p>

                <ul className="space-y-3 ml-6 list-disc text-gray-700 text-[15px] mb-4">
                  <li>
                    <span className="font-bold text-gray-900">Accommodation:</span> €300 – €700+
                  </li>
                  <li>
                    <span className="font-bold text-gray-900">Food & Groceries:</span> €150 – €250
                  </li>
                  <li>
                    <span className="font-bold text-gray-900">Transportation:</span> Often included in semester fees
                  </li>
                  <li>
                    <span className="font-bold text-gray-900">Health Insurance:</span> €80 – €160
                  </li>
                  <li>
                    <span className="font-bold text-gray-900">Miscellaneous:</span> €50 – €100 (<a href="https://www.msmunify.com/study-in-germany/cost-of-studying/?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">MSM Unify</a>)
                  </li>
                </ul>

                <p className="text-gray-500 leading-relaxed text-[15px]">
                  Gradient Edu helps you estimate your budget and plan accordingly — from pre-departure finances to on-campus living.
                </p>
              </section>

              {/* Work & Career */}
              <section id="work">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Work & Career Opportunities
                </h2>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-4">
                  International students in Germany are generally permitted to work part-time while studying (e.g., up to 120 full days or 20 hours per week) — helping you gain experience and support living costs. (<a href="https://www.britannicaoverseas.com/study-in-germany?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Britannica Overseas Education</a>)
                </p>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  After graduation, many students choose to apply for a <strong className="font-bold text-gray-900">post-study work permit</strong> (typically up to 18 months) to explore professional opportunities in Germany or across Europe. (<a href="https://www.britannicaoverseas.com/study-in-germany?utm_source=chatgpt.com" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Britannica Overseas Education</a>)
                </p>
              </section>

              {/* How Gradient Edu Supports You */}
              <section id="how-we-help">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  How Gradient Edu Supports You
                </h2>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-6">
                  From course discovery to student visas, Gradient Edu is your partner at every step:
                </p>
                <div className="border border-gray-100 rounded-2xl bg-white overflow-hidden">
                  <div className="divide-y divide-gray-100 flex flex-col">
                    {[
                      {
                        emoji: '🔍',
                        title: 'Course & University Search',
                        desc: 'Access a wide range of programmes across Germany and filter by subject, language, fees, and more.',
                      },
                      {
                        emoji: '🎓',
                        title: 'Shortlist & Compare Options',
                        desc: 'Build a personalised list of universities that align with your academic profile and goals.',
                      },
                      {
                        emoji: '📝',
                        title: 'Application Management',
                        desc: 'Start and track multiple applications online with real-time status updates through your dashboard.',
                      },
                      {
                        emoji: '📋',
                        title: 'Document Verification & Submission',
                        desc: 'Get expert review and support to ensure your application is complete and correctly presented.',
                      },
                      {
                        emoji: '📍',
                        title: 'Visa Guidance',
                        desc: 'Receive structured support for visa documentation, timelines, and embassy requirements.',
                      },
                      {
                        emoji: '🚀',
                        title: 'Pre-Departure Support',
                        desc: 'Prepare for life in Germany with advice on accommodation, banking, health insurance, and local orientation.',
                      },
                    ].map((item, idx) => (
                      <div key={idx} className="p-5 flex items-start gap-4">
                        <div className="text-xl shrink-0 mt-0.5">{item.emoji}</div>
                        <div>
                          <p className="font-bold text-[#334155] text-[15px] mb-1.5 leading-none">{item.title}</p>
                          <p className="text-gray-500 text-[15px] leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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
                  Explore these Germany cities where you can study and shape your bright future.
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

              {/* Ready to Get Started */}
              <section id="get-started">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Ready to Get Started?
                </h2>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-6">
                  Begin your journey to study in Germany with confidence. Explore courses, connect with expert advisors, and use the Gradient Edu portal to manage your applications end-to-end.
                </p>
                <div className="space-y-1.5 pl-0.5">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">👉</span>
                    <Link to="/course-search" className="text-slate-600 underline underline-offset-4 hover:text-blue-600 transition-colors text-[15px]">
                      Search Germany Courses
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
              <Sidebar {...germanySidebarData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInGermany;
