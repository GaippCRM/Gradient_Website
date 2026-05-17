import React from 'react';
import SEO from '../components/SEO';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Destinations from '../components/Destinations';
import Providers from '../components/Providers';
import Institutions from '../components/Institutions';
import Partnerships from '../components/Partnerships';
import Steps from '../components/Steps';
import CTA from '../components/CTA';

const Home = () => {
  const homeSchemas = [
    {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "@id": "https://gradient-edu.com/#organization",
      "name": "Gradient Edu",
      "url": "https://gradient-edu.com",
      "logo": "https://gradient-edu.com/image/logo_second.png",
      "email": "info@gradient-edu.com",
      "telephone": "+447892838321",
      "sameAs": [
        "https://www.instagram.com/gradient451/"
      ],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Shams Business Centre, Sharjah Media City",
        "addressLocality": "Sharjah",
        "addressCountry": "AE"
      }
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": "https://gradient-edu.com/#website",
      "name": "Gradient Edu",
      "url": "https://gradient-edu.com",
      "potentialAction": {
        "@type": "SearchAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://gradient-edu.com/course-search?q={search_term_string}"
        },
        "query-input": "required name=search_term_string"
      }
    }
  ];

  return (
    <main>
      <SEO 
        title="Gradient Edu - International Education & Study Abroad Services"
        description="Empower your international education journey with Gradient Edu. Discover top courses, explore world-class universities, and get expert counseling to study in the UK, Germany, USA, Australia, and Ireland."
        schemaMarkup={homeSchemas}
      />
      <Hero />
      <Stats />
      <Destinations isCarousel={true} />
      <Providers />
      <Institutions />
      <Partnerships />
      <Steps />
      <CTA />
    </main>
  );
};

export default Home;

