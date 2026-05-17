import React, { useEffect } from 'react';
import SEO from '../components/SEO';
import HeroBanner from '../components/HeroBanner';
import Breadcrumb from '../components/Breadcrumb';
import CountryHeader from '../components/CountryHeader';
import Sidebar from '../components/Sidebar';
import UniversitiesList from '../components/UniversitiesList';
import ProgramsTags from '../components/ProgramsTags';
import RequirementsGrid from '../components/RequirementsGrid';
import FAQAccordion from '../components/FAQAccordion';
import {
  Star,
  Flag,
  Briefcase,
  Clock,
  Users,
  Smile,
  Building2,
  Video,
  CreditCard
} from 'lucide-react';

const StudyInUK = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const universities = [
    { name: 'Bright Hill College London', location: 'United Kingdom', logo: null },
    { name: 'Oxford International Education Group', location: 'United Kingdom', logo: null },
    { name: 'University of Nottingham', location: 'United Kingdom', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b5/The_University_of_Nottingham_Trent_Arms.svg/220px-The_University_of_Nottingham_Trent_Arms.svg.png' },
    { name: 'City, University of London', location: 'United Kingdom', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/d/d3/City%2C_University_of_London_logo.svg/220px-City%2C_University_of_London_logo.svg.png' },
  ];

  const programs = [
    'Business', 'World Englishes', 'Computer Sciences', 'Law',
    'Business Administration', 'Finance', 'Education', 'Psychology',
    'Media Studies And Communication', 'Economics'
  ];

  const faqs = [
    {
      question: "How much study gap is acceptable in the UK for a master's?",
      answer: "UK universities generally accept a study gap of up to 2–3 years, provided you can justify it with work experience, internships, or valid reasons."
    },
    {
      question: "How much money is required to study in the UK?",
      answer: "The cost varies depending on the course and city. On average, tuition fees range from £10,000 to £38,000 per year, plus living expenses."
    },
    {
      question: "Can I get permanent residency in the UK after my studies?",
      answer: "Students can apply for the Graduate Route visa and later switch to work visas, which may lead to permanent residency."
    }
  ];

  const cities = [
    { name: 'London', image: '/image/country/london.jpg' },
    { name: 'Manchester', image: '/image/country/manchester.jpeg' },
    { name: 'Birmingham', image: '/image/country/birmingham.jpg' },
    { name: 'Leeds', image: '/image/country/leeds.jpg' },
  ];

  const ukSchemas = [
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
          "name": "Study in the UK",
          "item": "https://gradient-edu.com/study-in-uk"
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
        title="Study in UK | Top Universities, Cost of Living & FAQs - Gradient Edu"
        description="Explore premium opportunities to study in the UK. Search top universities, popular degree programs, student visa guidelines, cost of living, part-time jobs, and book a free video counseling session."
        schemaMarkup={ukSchemas}
      />
      <HeroBanner
        title="Study in the UK"
        subtitle="Transform your life in the hub of global education"
        bgImage="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&q=80&w=2070"
      />


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10 pb-20">
        <div className="bg-white rounded-t-3xl p-6 shadow-sm border-x border-t border-gray-100/50">
          <Breadcrumb items={[
            { label: 'Study in the UK' }
          ]} />

          <CountryHeader
            flag="https://flagcdn.com/w160/gb.png"
            name="United Kingdom"
            universityCount="16"
          />

          <div className="mt-8 flex flex-col lg:flex-row gap-10">
            {/* Left Column */}
            <div className="lg:w-2/3 space-y-12">

              {/* Why Study Section */}
              <section id="why-study">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why study in the UK
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px]">
                  The UK is a leading study destination with an excellent higher education system and a multicultural environment. The country is known for its world-renowned universities, with 4 institutions in the top 10 of the QS World University Rankings. Apart from academics, the benefits of studying in the UK include helping you land an awesome career and experience a classy lifestyle. Moreover, the educational system in the UK is all about inspiring greatness!
                </p>
              </section>

              {/* Universities List */}
              <section id="universities">
                <UniversitiesList universities={universities} />
              </section>

              {/* Popular Programs */}
              <section id="programs">
                <ProgramsTags programs={programs} />
              </section>

              {/* Requirements Grid */}
              <section id="requirements">
                <RequirementsGrid />
              </section>

              {/* What Sets UK Apart */}
              <section id="what-sets-apart">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Flag className="text-gray-900" size={24} />
                  What sets the UK apart
                </h3>
                <div className="p-6 border border-gray-100 rounded-2xl">
                  <p className="text-[15px] text-gray-500 leading-relaxed">
                    One of the things that sets the UK apart is that it allows graduates to stay and work for two years after completing a degree. In fact, PhD graduates can stay up to three years. Following this, you may also be eligible for a Permanent Residency (PR) in the UK, with a post-study work visa.
                  </p>
                </div>
              </section>

              {/* Student Life */}
              <section id="student-life">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <Users className="text-gray-900" size={24} />
                  Student life
                </h3>
                <p className="text-gray-500 leading-relaxed text-[15px] mb-8">
                  The UK offers a diverse student life and high academic standards. Additionally, the easy access to various accommodation options, part-time jobs, and post-study opportunities is a big plus. Everything you need to know to plan your student life in the UK is below. Do check it out.
                </p>
                <div className="space-y-px border border-gray-100 rounded-2xl overflow-hidden">
                  <div className="p-5 bg-white flex items-start gap-4 border-b border-gray-100">
                    <CreditCard className="text-purple-600 mt-0.5 shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-[15px]">Min. wage per hour for part-time jobs</h4>
                      <p className="text-[15px] text-gray-500">GBP 10–12</p>
                    </div>
                  </div>
                  <div className="p-5 bg-white flex items-start gap-4">
                    <Clock className="text-purple-600 mt-0.5 shrink-0" size={20} />
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-[15px]">Max. allowed part-time work hours</h4>
                      <p className="text-[15px] text-gray-500">20 hours a week</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Cost of Living */}
              <section id="cost-of-living">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CreditCard className="text-purple-600" size={24} />
                  Cost of living
                </h3>
                <ul className="space-y-4 ml-2">
                  {[
                    { label: "Accommodation", value: "GBP 1,000 to 1,500/month" },
                    { label: "Food", value: "GBP 200 to 300/month" },
                    { label: "Transportation", value: "GBP 60 to 100/month" },
                    { label: "Utilities", value: "GBP 150 to 200/month" },
                    { label: "Health insurance", value: "GBP 30 to 50/month" },
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-[10px] shrink-0"></div>
                      <p>
                        <span className="font-medium text-gray-900">{item.label}:</span>{" "}
                        <span className="text-gray-500">{item.value}</span>
                      </p>
                    </li>
                  ))}
                </ul>
                <p className="text-[13px] text-gray-400 italic mt-6">
                  (Source: <a href="https://www.numbeo.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">https://www.numbeo.com/</a> as of Feb 2025)
                </p>
              </section>

              {/* Visa and Work Permit */}
              <section id="visa">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <CreditCard className="text-purple-600" size={24} />
                  Visa and work permit
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-[16px]">Student visa</h4>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-start gap-3 text-[15px] text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-[10px] shrink-0"></div>
                        <p><span className="font-medium text-gray-900">Eligibility:</span> Enrolled in a course at an educational institution in the UK</p>
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-[10px] shrink-0"></div>
                        <p><span className="font-medium text-gray-900">Validity:</span> Course duration + 4 months</p>
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-3 text-[16px]">Post-study work visa</h4>
                    <ul className="space-y-2 ml-2">
                      <li className="flex items-start gap-3 text-[15px] text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-[10px] shrink-0"></div>
                        <p><span className="font-medium text-gray-900">Eligibility:</span> Completion of a degree or other eligible qualification at a UK higher education provider</p>
                      </li>
                      <li className="flex items-start gap-3 text-[15px] text-gray-700">
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-[10px] shrink-0"></div>
                        <p><span className="font-medium text-gray-900">Validity:</span> 2 years for graduates and 3 years for doctoral graduates</p>
                      </li>
                    </ul>
                  </div>

                  <p className="text-[13px] text-gray-400 italic mt-4">
                    (Source: <a href="https://www.gov.uk/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors">https://www.gov.uk/</a> as of Feb 2025)
                  </p>
                </div>
              </section>

              {/* Employment Opportunities */}
              <section id="employment">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Briefcase className="text-purple-600" size={24} />
                  Employment opportunities
                </h3>
                <ul className="space-y-4 ml-2">
                  {[
                    { label: "Information Technology", level: "High" },
                    { label: "Artificial Intelligence", level: "High" },
                    { label: "Healthcare", level: "High" },
                    { label: "Construction and Skilled Trades", level: "Medium" },
                    { label: "Retail and Hospitality", level: "Low to Medium" }
                  ].map((job, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-[15px] text-gray-700">
                      <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mt-[10px] shrink-0"></div>
                      <p>
                        <span className="font-medium text-gray-900">{job.label}:</span>{" "}
                        <span className="text-gray-500">{job.level}</span>
                      </p>
                    </li>
                  ))}
                </ul>
              </section>

              {/* Help Section */}
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

              {/* Fun Facts */}
              <section id="fun-facts">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Smile className="text-gray-900" size={24} />
                  Fun facts
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Britishers drink about 100 million cups of tea every day",
                    "Stonehenge in the UK is a prehistoric monument that's older than the pyramids!",
                    "Cheese rolling is considered a sport in the United Kingdom.",
                    "The UK celebrates several “bank holidays,” which means you’ll get extra days off.",
                    "The London Underground, or \"the Tube,\" is the oldest metro system in the world, since 1863.",
                    "London alone has over 270 nationalities, making it one of the most diverse cities globally.",
                    "The UK has over 30 distinct language accents.",
                    "Many UK universities and cities have been featured in the Harry Potter movies."
                  ].map((fact, idx) => (
                    <div key={idx} className="p-6 bg-white border border-gray-100 rounded-[20px] flex items-center min-h-[90px]">
                      <p className="text-[15px] text-gray-500 font-normal leading-relaxed">{fact}</p>
                    </div>
                  ))}
                </div>
              </section>

              {/* Cities to Study */}
              <section id="cities">
                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  <Building2 className="text-gray-900" size={24} />
                  Cities to study
                </h3>
                <p className="text-gray-500 text-[15px] mb-8">
                  Explore these UK cities where you can study and shape your bright future.
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

              {/* FAQs */}
              <section id="faqs">
                <FAQAccordion faqs={faqs} />
              </section>

            </div>

            {/* Right Column / Sidebar */}
            <div className="lg:w-1/3">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudyInUK;
