
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
      <Breadcrumb title="Privacy Policy" subtitle="Privacy Policy" />
       <div className="lonyo-section-padding1 py-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex align-items-center">
              <div className="lonyo-default-content pl-32 cmsbox" data-aos="fade-up" data-aos-duration="900">
                <article>
                  <h4>1. Introduction</h4>
                  <p>
                    Welcome to Cash2Captcha. ("Company", "we", "our", "us"). We are committed to protecting your privacy and ensuring that your personal information is collected, processed, and stored in compliance with the Information Technology Act, 2000, the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011, and the Digital Personal Data Protection Act, 2023 (DPDP Act).
                  </p>
                  <p>
                    This Privacy Policy explains how we collect, use, share, and safeguard your information when you use our services. By accessing or using Cash2Captcha, you consent to the practices described in this Privacy Policy.
                  </p>

                  <h4>2. Information We Collect</h4>
                  <p><strong>Personal Information:</strong> Name, email address, phone number, payment details (for rewards/withdrawals).</p>
                  <p><strong>Captchas Data:</strong> Responses and feedback you provide in Captchas.</p>
                  <p><strong>Device &amp; Technical Data:</strong> IP address, browser type, operating system, and usage statistics.</p>
                  <p><strong>Referral Information:</strong> Details of referral activities and invite codes.</p>
                  <p><strong>Cookies &amp; Tracking Data:</strong> Information about your browsing activity (see Section 5).</p>

                  <h4>3. Use of Information</h4>
                  <ul>
                    <li>Provide access to Captchas and process payments/rewards.</li>
                    <li>Improve our services and enhance user experience.</li>
                    <li>Verify identity and prevent fraud or misuse.</li>
                    <li>Send notifications, updates, and promotional offers.</li>
                    <li>Comply with applicable Indian laws and regulations.</li>
                  </ul>

                  <h4>4. Sharing of Information</h4>
                  <p>We do not sell or rent your personal data. However, we may share information with:</p>
                  <ul>
                    <li>Trusted service providers (payment processors, analytics, hosting services).</li>
                    <li>Captcha partners or research organizations (for Captcha-related purposes).</li>
                    <li>Government authorities or regulators if required by Indian law.</li>
                  </ul>

                  <h4>5. Cookies &amp; Tracking Technologies</h4>
                  <p>We use cookies and similar technologies to:</p>
                  <ul>
                    <li>Recognize repeat visitors.</li>
                    <li>Store user preferences.</li>
                    <li>Track performance and engagement.</li>
                  </ul>
                  <p>You may disable cookies in your browser settings, but some features of our service may not function properly.</p>

                  <h4>6. Analytics</h4>
                  <p>We may use third-party analytics tools to monitor usage and improve services. These tools may collect information such as device details, session duration, and interactions, but not personally identifiable details unless you provide them.</p>

                  <h4>7. Payments</h4>
                  <p>When you request withdrawals, we may collect and share payment-related information with payment processors and banking partners. We do not store sensitive financial information longer than necessary.</p>

                  <h4>8. Data Retention</h4>
                  <p>We retain data only as long as necessary for providing services, fulfilling legal obligations, resolving disputes, or enforcing agreements, in compliance with Indian law.</p>

                  <h4>9. Security of Data</h4>
                  <p>We follow reasonable security practices as per the IT Act, 2000 and DPDP Act, 2023. While we take strict measures to secure your information, no electronic storage or transmission method is completely secure.</p>

                  <h4>10. Children's Privacy</h4>
                  <p>Our services are not directed towards children under 18 years of age. If you are under 18, you may only use our services under the supervision of a parent/guardian.</p>

                  <h4>11. Your Rights</h4>
                  <p>As per the DPDP Act, 2023, you have the right to:</p>
                  <ul>
                    <li>Access and update your personal information.</li>
                    <li>Withdraw consent for processing your data.</li>
                    <li>Request deletion of your personal information (subject to legal obligations).</li>
                    <li>File a grievance with our Grievance Officer.</li>
                  </ul>

                  <h4>12. Links to Other Sites</h4>
                  <p>Our services may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to read their privacy policies.</p>

                  <h4>13. Disclaimer of Liability</h4>
                  <p>While we strive to secure your data, Cash2Captcha is not liable for unauthorized access, hacking, or any loss of data beyond our reasonable control.</p>

                  <h4>14. Changes to This Privacy Policy</h4>
                  <p>We may update this Privacy Policy periodically. Any changes will be posted on our website, and your continued use of the service will indicate acceptance of the updated terms.</p>

                  <h4>15. Grievance Officer</h4>
                  <p>As per Indian IT Rules, 2021, we have appointed a Grievance Officer to address user complaints:</p>
                  <p>
                    <strong>Name :</strong> Cash2Captcha Legal Team<br />
                    <strong>Email :</strong> <a href="mailto:help@Cash2Captcha.com">help@Cash2Captcha.com</a><br />
                    <strong>Jurisdiction :</strong> Hyderabad, Telangana, India
                  </p>

                  <h4>16. Governing Law &amp; Jurisdiction</h4>
                  <p>This Privacy Policy is governed by the laws of India, and any disputes shall be subject to the exclusive jurisdiction of the courts of Ongole, Andhar Pradesh.</p>

                  <h4>17. Contact Us</h4>
                  <p>If you have questions or comments about this Privacy Policy, please contact us at: <a href="mailto:privacy@cash2captcha.com">privacy@cash2captcha.com</a></p>
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