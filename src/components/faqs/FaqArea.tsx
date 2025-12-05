"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const faq_data1 = [
 {
    id: 1,
    delay: 500,
    question: "1. What is Cash2Captcha ?",
    answer:
      "Cash2Captcha is an app and website where you can earn real money by solving CAPTCHA images. You get paid a small amount for each captcha you type correctly and can withdraw the money once you reach the minimum payout amount.",
  },
  {
    id: 2,
    delay: 700,
    question: "2. How to Purchase this App",
    answer:
      "To get a subscription, first download the Cash2Captcha app and log in securely with the OTP sent to your mobile number. Once you're in, find the 'Plans' or 'Subscription' section in the app menu. From there, simply choose the plan you want and complete the payment to activate it instantly.",
  },
  {
    id: 3,
    delay: 900,
    question: "3. How do I Make a Premium User?",
    answer:
      "To become a Premium User, purchase the Premium Plan in the app. This unlocks benefits like higher earning rates, priority access to tasks, and faster support to help you earn more money, more quickly.",
  },
  {
    id: 4,
    delay: 900,
    question: "4. How to became agent?",
    answer:
      "To become an agent, download the Cash2Captcha app and navigate to the Agent section. After logging in, pay the required subscription fee. This will activate your agent account, allowing you to earn commissions by referring new users to the platform.",
  },
  {
    id: 5,
    delay: 900,
    question: "5. When and how do I get paid?",
    answer:
      "You can request a payout as soon as your account balance reaches the minimum withdrawal amount (e.g., ₹500). To do this, go to the Withdraw or Payout section in the app, choose your preferred payment method (like Bank, Upi, etc...), and submit your request. Payments are typically processed within a few business days.",
  },
];

const FaqArea = () => {
  const [open, setOpen] = useState(0);
  const [open2, setOpen2] = useState(0);
  const [open3, setOpen3] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on state change
  }, [open]);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on state change
  }, [open2]);

  useEffect(() => {
    AOS.refresh(); // Refresh AOS on state change
  }, [open3]);



  return <>
    <div className="lonyo-section-padding9">
      <div className="container">
        <div className="lonyo-faq-wrap1">
          {faq_data1.map((item, i) => (
            <div key={i} className={`lonyo-faq-item item2 ${open === i ? 'open' : ''}`} data-aos="fade-up" data-aos-duration={item.delay}>
              <div className="lonyo-faq-header">
                <h4 onClick={() => setOpen(i)}>{item.question}</h4>
                <div className="lonyo-active-icon">
                  <img className="plasicon" src="assets/images/v1/mynus.svg" alt="" />
                  <img className="mynusicon" src="assets/images/v1/plas.svg" alt="" />
                </div>
              </div>
              <div className="lonyo-faq-body body2">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="faq-btn" data-aos="fade-up" data-aos-duration="700">
          <Link className="lonyo-default-btn faq-btn2" href="/contact-us">Can't find your answer</Link>
        </div>
      </div>
    </div>
  </>;
};

export default FaqArea;
