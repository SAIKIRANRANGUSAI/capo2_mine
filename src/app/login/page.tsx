
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';    
import Signin from '@/components/login';

export const metadata: Metadata = {
   title: "Cash2Captcha",
  description: "Cash2Captcha",
}

 
const index = () => {
  return (
    <Wrapper>
      <Signin />
    </Wrapper>
  );
};

export default index;