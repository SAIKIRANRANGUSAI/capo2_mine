
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
      <Breadcrumb title="Refund Policy" subtitle="Refund Policy" />
       <div className="lonyo-section-padding1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center">
              <div className="lonyo-default-content pl-32 cmsbox" data-aos="fade-up" data-aos-duration="900">
                <article>
              <h4>Refund Policy</h4>
              <p>
                This Refund Policy ("Subscription") governs all transactions made on Cash2Captcha ("Platform," "we," "us," or "our"). By accessing or using our services, you agree to this Policy, along with our Terms of Service and Privacy Policy.
              </p>

              <h4>General Refund Policy</h4>
              <p>
                1) Refunds are available only in cases where the service Subscription is defective, inaccessible, or not delivered as promised.
              </p>
              <p>2) <strong> To request a refund, you must:</strong></p>
              <ul>
                <li>Contact our customer support at <a href="mailto:help@Cash2Captcha.com">help@Cash2Captcha.com</a> within 7 (seven) days of the date of Subscription.</li>
                <li>Provide details of the issue along with relevant supporting documents/screenshots, if applicable.</li>
              </ul>
              <p>3) Our team will review your request and respond within 48 hours.</p>
              <p>4) If approved, the refund will be processed within 7 (seven) working days to the original payment method used.</p>

              <h4>Subscription Plans Refund Policy</h4>
              <p>
                1) Certain services may require a refundable security deposit as specified at the time of purchase.
              </p>
              <p>2) <strong>Refund of the deposit is subject to:</strong></p>
              <ul>
                <li>Deduction of a 5% annual service charge (plus applicable GST @18%).</li>
                <li>Compliance with the platform’s terms of use.</li>
                <li>Refund requests must be made by the original depositor with valid proof of identity and payment.</li>
              </ul>

              <p>3) <strong>If the Subscription refund is not claimed within 30 days from the date of deposit:</strong></p>
              <ul>
                <li>The amount shall be deemed forfeited.</li>
                <li>Forfeited deposits will be used for platform maintenance and operational expenses as per Indian tax and accounting laws.</li>
                <li>No refund claims will be entertained after the 30-day period under any circumstances.</li>
              </ul>

              <h4>Method of Refund</h4>
              <p>Once you submit a valid withdrawal request from your account, we will process your payment.</p>
              <p><strong>Processing timelines:</strong></p>
              <ul>
                <li><strong>Processing Time:</strong> Withdrawal requests typically take 3 to 7 business days (Monday to Friday, excluding public holidays).</li>
                <li><strong>Account Review:</strong> Some withdrawals may undergo internal review for security and fraud prevention, which may extend processing time.</li>
                <li>We reserve the right to delay or cancel suspicious transactions.</li>
              </ul>

              <h4>Contact Us</h4>
              <p>
                4) If you have any questions about this Cancellation &amp; Refund Policy, please contact us at:<br/>
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