import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Highlights from '../components/Highlights';
import LogoSlider from '../components/LogoSlider';
import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <>
      <Hero />
      <Stats />
      <Highlights />
      <LogoSlider />
      <Testimonials />
    </>
  );
};

export default Home;
