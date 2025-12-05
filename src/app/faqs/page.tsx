

import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper'; 
import Faqs from '@/components/faqs';

export const metadata: Metadata = {
   title: "Cash2Captcha",
  description: "Cash2Captcha",
}

 
const index = () => {
  return (
    <Wrapper>
      <Faqs />
    </Wrapper>
  );
};

export default index;