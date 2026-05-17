import React, { useEffect } from 'react';

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const portals = [
    {
      title: 'Students',
      description: "We'll guide you to your dream course — from course selection to campus life.",
      image: "/contact-students.png", // User's precise student picture
      link: "https://wa.me/+447892838321"
    },
    {
      title: 'Agents',
      description: "Get support to submit quick and compliant applications, and earn your commissions.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800", // Professionals in suits
      link: "https://wa.me/+447892838321"
    },
    {
      title: 'Institutions',
      description: "Increase your reach and gain high-quality applications by partnering with us.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&q=80&w=800", // University building
      link: "https://wa.me/+447892838321"
    }
  ];

  return (
    <div className="bg-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header Section */}
        <div className="text-center mb-16 lg:mb-20">
          <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-4 tracking-tight">
            Contact us
          </h1>
          <p className="text-gray-700 text-[15px]">
            Every success story <span className="text-blue-600">begins</span> with a conversation!
          </p>
        </div>

        {/* Portals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {portals.map((portal, index) => (
            <div key={index} className="flex flex-col group">
              {/* Image Container */}
              <div className="w-full h-[220px] lg:h-[260px] overflow-hidden mb-5 bg-gray-100 rounded-sm">
                <img
                  src={portal.image}
                  alt={portal.title}
                  className={`w-full h-full object-cover transition-transform duration-700 ${index === 0 ? 'scale-[1.3] group-hover:scale-[1.35]' : 'group-hover:scale-105'
                    }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-[#8B5CF6] text-xl font-medium mb-3">
                {portal.title}
              </h3>

              <p className="text-[#374151] text-[15px] leading-[1.6] mb-6 flex-grow">
                {portal.description}
              </p>

              {/* Button */}
              <div>
                <a
                  href={portal.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#4F46E5] hover:bg-blue-700 text-white font-medium text-sm px-6 py-2.5 rounded shadow-sm transition-colors"
                >
                  Let's talk
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ContactUs;
