import React from 'react';
import SEO from '../components/SEO';
import SearchHero from '../components/SearchHero';
import Subjects from '../components/Subjects';
import Intakes from '../components/Intakes';
import Destinations from '../components/Destinations';
import CTASection from '../components/CTASection';

const CourseSearch = () => {
  const courseSchemas = [
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
          "name": "Course Finder",
          "item": "https://gradient-edu.com/course-search"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans selection:bg-blue-100 selection:text-blue-700">
      <SEO 
        title="Find & Compare International Courses | Course Finder - Gradient Edu"
        description="Search, filter, and compare thousands of degrees, diplomas, and pathway courses at top-tier global universities. Start your international study journey here."
        schemaMarkup={courseSchemas}
      />
      <main className="flex flex-col w-full">
        {/* Hero Section with Search and Filters */}
        <SearchHero />

        {/* Popular Subjects Grid */}
        <Subjects />

        {/* Upcoming Intakes Grid */}
        <Intakes />

        {/* Top Study Destinations Grid */}
        <Destinations />

        {/* Call to Action Section with Stats */}
        <CTASection />
      </main>
    </div>
  );
};

export default CourseSearch;
