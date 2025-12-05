
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';  
import AboutUs from '@/components/about-us';

export const metadata: Metadata = {
   title: "Cash2Captcha",
  description: "Cash2Captcha",
}


const index = () => {
  return (
    <Wrapper>
      <AboutUs />
    </Wrapper>
  );
};

export default index;