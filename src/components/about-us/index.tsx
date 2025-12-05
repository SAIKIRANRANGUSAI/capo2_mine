
import React from 'react';
import AboutMission from './AboutMission';
import Breadcrumb from '@/common/Breadcrumb';

const AboutUs = () => {
  return (
    <>
      <Breadcrumb title="About Us" subtitle="About Us" />
      <AboutMission />  
    </>
  );
};

export default AboutUs;