"use client";
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { LiaUserLockSolid } from "react-icons/lia";
import { BsTelephone } from "react-icons/bs";

const SigninArea = () => {
  const router = useRouter();
  const [mobile, setMobile] = useState('');
  const [error, setError] = useState('');

  // Valid 10-digit Indian number
  const validateMobile = (num: string) => /^[6-9]\d{9}$/.test(num);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const digits = e.target.value.replace(/\D/g, '');
    const newMobile = digits.slice(0, 10);
    setMobile(newMobile);

   if (newMobile.length > 0 && newMobile.length < 10) {
      setError(`Enter a valid 10-digit mobile number. (${newMobile.length}/10)`);
    } else if (newMobile.length === 10 && !validateMobile(newMobile)) {
      setError("Enter a valid 10-digit mobile number.");
    } else {
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // stop auto navigation

    if (!validateMobile(mobile)) {
      setError("Enter a valid 10-digit mobile number.");
      return;
    }

    setError("");
    router.push(`/otp?mobile=${mobile}`);
  };

  return (
    <div className="lonyo-account-section light-bg">
      <div className="container">
        <div className="lonyo-account-box" data-aos="fade-up" data-aos-duration="700">
          <div className="lonyo-contact-box2">
            <h4><LiaUserLockSolid style={{ position: 'relative', top: '-3px' }} /> LOGIN</h4>
            <p>Enter Your Mobile Number</p>

            {/* FORM SUBMIT HANDLES VALIDATION */}
            <form onSubmit={handleSubmit}>
              <div className="lonyo-main-field position-relative">
                <input
                  className="light-bg mb-2"
                  type="tel"
                  inputMode="numeric"
                  placeholder="Mobile No"
                  value={mobile}
                  onChange={handleChange}
                  maxLength={10}
                />

                {error && (
                  <div style={{ color: 'red', marginTop: 6, marginBottom:'15px' }}><small>{error}</small></div>
                )}

                <span><BsTelephone /></span>
              </div>

              {/* ✔ BUTTON MUST BE SUBMIT */}
              <button
                className="lonyo-default-btn extra-btn d-block"
                type="submit"
                disabled={!validateMobile(mobile)}
              >
                SEND OTP
              </button>

              <div className="footerlogin">
                <span>By Continuing you agree to our</span><br />
                <Link href="/privacy-policy" target='_blank'>Terms of Services</Link> &nbsp; &amp; &nbsp;
                <Link href="/terms-and-conditions" target='_blank'>Privacy Policy</Link>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SigninArea;
