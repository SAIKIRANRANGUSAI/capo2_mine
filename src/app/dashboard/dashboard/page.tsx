
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';  
import Link from 'next/link';

export const metadata: Metadata = {
   title: "Cash2Captcha",
  description: "Cash2Captcha",
}


const Index = () => {
  return (
    <Wrapper>
     <div className="container pd-200">
        <div className="row">
          <div className="col-lg-3">
              <div className="dashboardmenu">
                <ul>
                  <li><Link href="#">Dashboard</Link></li>
                  <li><Link href="#">Solve Captcha</Link></li>
                  <li><Link href="#">Withdraw</Link></li>
                  <li><Link href="#">Referrals</Link></li>
                  <li><Link href="#">Subscriptions</Link></li>
                </ul>
              </div>
          </div>
          <div className="col-lg-9">
            <div className="card">
              <div className="card-header">ss</div>
              <div className="card-body"></div>
            </div>
          </div>
        </div>
     </div>
    </Wrapper>
  );
};

export default Index;