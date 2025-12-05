
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import Otp from '@/components/otp';

export const metadata: Metadata = {
   title: "Cash2Captcha",
  description: "Cash2Captcha",
}

 
const index = () => {
  return (
    <Wrapper>
      <Otp />
    </Wrapper>
  );
};

export default index;