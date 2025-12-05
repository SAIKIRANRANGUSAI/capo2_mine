
import React from 'react';
import HomeTwo from '@/components/homes/home-2';

import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';
export const metadata: Metadata = {
  title: "Cash2Captcha",
  description: "Cash2Captcha",
}


const index = () => {
  return (
    <Wrapper>
      <HomeTwo />
    </Wrapper>
  );
};

export default index;