
import React from 'react'; 
import type { Metadata } from 'next' 
import Wrapper from '@/layouts/Wrapper';  
import Breadcrumb from '@/common/Breadcrumb';

export const metadata: Metadata = {
   title: "Cash2Captcha",
  description: "Cash2Captcha",
}


const index = () => {
  return (
    <Wrapper>
      <Breadcrumb title="Shipping Delivery" subtitle="Shipping Delivery" />
       <div className="lonyo-section-padding1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center">
              <div className="lonyo-default-content pl-32 cmsbox" data-aos="fade-up" data-aos-duration="900">
                <article>
               <h4>Shipping &amp; Delivery Policy</h4>
    <p>
      This Shipping &amp; Delivery Policy explains how payments are delivered to users of the Cash2Captcha Platform. As our services are entirely digital, this policy pertains to the delivery of monetary earnings, not physical goods.
    </p>

    <h4>Nature of Service and "Delivery"</h4>
    <p>
      Cash2Captcha provides a digital platform where users earn money by solving captchas. The term "delivery" in the context of our service refers to the electronic transfer of your accrued earnings from your Cash2Captcha account to your designated payment account (e.g., bank account, UPI, or other supported payment wallets).
    </p>
    <p>
      There are no physical products to be shipped. All transactions and services are conducted electronically.
    </p>

    <h4>Delivery Method</h4>
    <p>
      All payments are delivered electronically to the payment method you have registered and selected in your Cash2Captcha account profile. It is your sole responsibility to ensure that the payment information you provide (such as bank account number, IFSC code, or UPI ID) is accurate and up-to-date.
    </p>
    <p>
      We are not liable for payments sent to an incorrect destination due to user error.
    </p>

    <h4>Shipping Confirmation</h4>
    <p>
      You will not receive a "shipping confirmation" in the traditional sense. Instead, you will receive a confirmation notification via email, messages, and WhatsApp messages after your payment is processed.
    </p>

    <h4>No Shipping Fees or Handling Charges</h4>
    <p>
      Since our service is digital, there are no shipping fees, handling charges, or taxes related to the delivery of physical goods like Cap 🧢, T-shirt, or Bag.
    </p>
    <p>
      Any transaction fees charged by payment gateways, if applicable, will be disclosed separately.
    </p>

    <h4>Contact Us</h4>
    <p>
      If you have any questions or concerns about the delivery of your payments, please contact our support team at:<br/>
      <a href="mailto:support@cash2captcha.com">support@cash2captcha.com</a>
    </p>

  </article>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default index;