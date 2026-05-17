import React from 'react';
import SearchHero from '../components/SearchHero';
import Subjects from '../components/Subjects';
import Intakes from '../components/Intakes';
import Destinations from '../components/Destinations';
import CTASection from '../components/CTASection';

const CourseSearch = () => {
  return (
    <div className="min-h-screen bg-[#fafbfc] font-sans selection:bg-blue-100 selection:text-blue-700">
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
