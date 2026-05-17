import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Destinations from '../components/Destinations';
import Providers from '../components/Providers';
import Institutions from '../components/Institutions';
import Partnerships from '../components/Partnerships';
import Steps from '../components/Steps';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <main>
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
