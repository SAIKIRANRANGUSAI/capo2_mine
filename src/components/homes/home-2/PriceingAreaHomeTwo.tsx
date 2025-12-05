 
import Link from 'next/link';
import React from 'react';
import { FiCheckCircle } from "react-icons/fi";
import { LuIndianRupee } from "react-icons/lu";

const PriceingAreaHomeTwo = () => {
  return (
    <>
      <div className="lonyo-section-padding10">
        <div className="container-fluid">
          <div className="lonyo-section-title center">
            <h2 className='pb-2'>Choose User Plans</h2>
            <p>We have flexible and rewarding plans to help you maximize your earnings by solving captchas.</p>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3">
              <div className="lonyo-pricing-wrap" data-aos="fade-right" data-aos-duration="700">
                <div className="lonyo-pricing-header">
                  <h4>Simple Plan</h4>
                </div>
                <div className="lonyo-pricing-price">
                  <h2><LuIndianRupee />99</h2>
                </div>
                <div className="lonyo-pricing-body">
                  <ul>
                    <li><FiCheckCircle /> Limited Earning</li>
                    <li><FiCheckCircle /> Captcha per day - 30</li>
                    <li><FiCheckCircle /> 1 Captcha to 15 Captchas: ₹1</li>
                    <li><FiCheckCircle /> 16 Captchas to 30 Captchas: ₹2</li>
                  </ul>
                </div>
                <div className="lonyo-pricing-header">
                  <h4>Benefit’s</h4>
                </div>
                <div className="lonyo-pricing-body">
                  <ul>
                    <li><FiCheckCircle /> Refer a friend by code :₹10 (Every Login)</li>
                    <li><FiCheckCircle /> Every 10-referral ₹ 50 + Cap</li>
                  </ul>
                </div>
                <div className="lonyo-pricing-footer extra-mt">
                  <Link className="lonyo-default-btn d-block pricing-btn" href="/contact-us">Buy Now</Link>
                </div>
              </div>
            </div>
           <div className="col-xl-3 col-lg-3">
              <div className="lonyo-pricing-wrap" data-aos="fade-right" data-aos-duration="700">
                <div className="lonyo-pricing-header">
                  <h4>Standard Silver Plan</h4>
                </div>
                <div className="lonyo-pricing-price">
                  <h2><LuIndianRupee />999</h2>
                </div>
                <div className="lonyo-pricing-body">
                  <ul>
                    <li><FiCheckCircle /> Limited Earning</li>
                    <li><FiCheckCircle /> Captcha per day - 1000</li>
                    <li><FiCheckCircle /> 1 Captcha to 250 Captchas: ₹10</li>
                    <li><FiCheckCircle /> 256Captchas to 500 Captchas: ₹20</li>
                    <li><FiCheckCircle /> 501Captchas to 750 Captchas: ₹30</li>
                    <li><FiCheckCircle /> 751Captchas to 1000 Captchas: ₹40</li>
                  </ul>
                </div>
                <div className="lonyo-pricing-header">
                  <h4>Benefit’s</h4>
                </div>
                <div className="lonyo-pricing-body">
                  <ul>
                    <li><FiCheckCircle /> Min Earning Per Day: ₹300</li>
                    <li><FiCheckCircle />Refer a friend by code :₹100 (Every Login)</li>
                    <li><FiCheckCircle />Every 10-referral ₹50 + </li>
                    <li><FiCheckCircle />Every 20-referral ₹100 + T shirt</li>
                  </ul>
                </div>
                <div className="lonyo-pricing-footer extra-mt">
                  <Link className="lonyo-default-btn d-block pricing-btn" href="/contact-us">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="lonyo-pricing-wrap" data-aos="fade-right" data-aos-duration="700">
                <div className="lonyo-pricing-header">
                  <h4>Premium Gold Plan</h4>
                </div>
                <div className="lonyo-pricing-price">
                  <h2><LuIndianRupee />1999</h2>
                </div>
                <div className="lonyo-pricing-body">
                  <ul>
                    <li><FiCheckCircle /> Unlimited Earning</li>
                    <li><FiCheckCircle /> Captcha per day - Unlimited</li>
                    <li><FiCheckCircle /> 1 Captcha to 500 Captchas: ₹20</li>
                    <li><FiCheckCircle /> 501Captchas to 1000Captchas: ₹40</li>
                    <li><FiCheckCircle /> 1001Captchas to 1500Captchas: ₹60</li>
                    <li><FiCheckCircle /> 1501Captchas to 2000Captchas: ₹70</li>
                    <li><FiCheckCircle /> Next Level +500 Captchas + ₹10 per level .......... Unlimited Levels</li>
                  </ul>
                </div>
                <div className="lonyo-pricing-header">
                  <h4>Benefit’s</h4>
                </div>
                <div className="lonyo-pricing-body">
                  <ul>
                    <li><FiCheckCircle /> Earning Per Day Min: ₹500</li>
                   <li><FiCheckCircle /> Refer a friend by code : ₹200 (Every Login)</li>
                   <li><FiCheckCircle /> Every 10-referral ₹50 + Cap</li>
                   <li><FiCheckCircle /> Every 20-referral ₹100 + T shirt</li>
                  </ul>
                </div>
                <div className="lonyo-pricing-footer extra-mt">
                  <Link className="lonyo-default-btn d-block pricing-btn" href="/contact-us">Buy Now</Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-3">
              <div className="lonyo-pricing-wrap" data-aos="fade-right" data-aos-duration="700">
                <div className="lonyo-pricing-header">
                  <h4>Bronze Plan</h4>
                </div>
                <div className="lonyo-pricing-price">
                  <h2><LuIndianRupee />1999</h2>
                </div>
                <div className="lonyo-pricing-body">
                  <ul>
                    <li><FiCheckCircle /> Limited Earning</li>
                    <li><FiCheckCircle /> Captcha per day - 500</li>
                    <li><FiCheckCircle /> 1 Captcha to 125 Captchas: ₹5</li>
                    <li><FiCheckCircle /> 126Captchas to 250 Captchas: ₹10</li>
                    <li><FiCheckCircle /> 256Captchas to 375 Captchas: ₹15</li>
                    <li><FiCheckCircle /> 376Captchas to 500 Captchas: ₹20</li>
                  </ul>
                </div>
                <div className="lonyo-pricing-header">
                  <h4>Benefit’s</h4>
                </div>
                <div className="lonyo-pricing-body">
                  <ul>
                    <li><FiCheckCircle /> Earning Per Day Min: ₹500</li>
                    <li><FiCheckCircle /> Refer a friend by code : ₹200 (Every Login)</li>
                    <li><FiCheckCircle /> Every 10-referral ₹50 + Cap</li>
                    <li><FiCheckCircle /> Every 20-referral ₹100 + T shirt</li>
                  </ul>
                </div>
                <div className="lonyo-pricing-footer extra-mt">
                  <Link className="lonyo-default-btn d-block pricing-btn" href="/contact-us">Buy Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PriceingAreaHomeTwo;