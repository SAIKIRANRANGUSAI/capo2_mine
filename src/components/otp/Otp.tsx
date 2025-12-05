"use client";
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { TbDeviceMobileMessage } from "react-icons/tb";

const OtpArea = () => {
  const router = useRouter();
  const [otp, setOtp] = useState(['', '', '', '']);
  const [error, setError] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Function to auto clear error when OTP becomes 4 digits
  const clearErrorIfComplete = (arr: string[]) => {
    if (/^\d{4}$/.test(arr.join(''))) {
      setError("");
    }
  };

  const handleChange = (index: number, value: string) => {
    const digits = value.replace(/\D/g, '');
    const newOtp = [...otp];

    // If user pastes multiple digits in one box
    if (digits.length > 1) {
      let pos = index;
      for (const ch of digits) {
        if (pos > 3) break;
        newOtp[pos] = ch;
        pos++;
      }
      setOtp(newOtp);

      clearErrorIfComplete(newOtp);

      const nextIndex = Math.min(index + digits.length, 3);
      inputRefs.current[nextIndex]?.focus();
      return;
    }

    // Single digit input
    if (/^\d?$/.test(digits)) {
      newOtp[index] = digits;
      setOtp(newOtp);

      clearErrorIfComplete(newOtp);

      if (digits && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Backspace") {
      if (otp[index]) {
        const newOtp = [...otp];
        newOtp[index] = "";
        setOtp(newOtp);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        const newOtp = [...otp];
        newOtp[index - 1] = "";
        setOtp(newOtp);
      }
    }
  };

  const handlePaste = (index: number, e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData("text").replace(/\D/g, '');
    if (!pasted) return;

    const newOtp = [...otp];
    let pos = index;

    for (const ch of pasted) {
      if (pos > 3) break;
      newOtp[pos] = ch;
      pos++;
    }

    setOtp(newOtp);
    clearErrorIfComplete(newOtp);

    const focusIndex = Math.min(index + pasted.length, 3);
    inputRefs.current[focusIndex]?.focus();
  };

  const otpValue = otp.join('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!/^\d{4}$/.test(otpValue)) {
      setError("Enter the 4-digit OTP sent to your mobile.");
      return;
    }

    setError("");

    console.log("OTP Verified:", otpValue);

    // Navigate after verification
    // router.push("/dashboard");
  };

  return (
    <div className="lonyo-account-section light-bg">
      <div className="container">
        <div className="lonyo-account-box" data-aos="fade-up" data-aos-duration="700">
          <div className="lonyo-contact-box2">

            <h4><TbDeviceMobileMessage style={{ position: "relative", top: "-3px" }} /> OTP</h4>
            <p>Enter the 4-digit code sent to +91 xxxxxx</p>

            <form onSubmit={handleSubmit}>
              <div
                className="otp-input-group"
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                {otp.map((digit, index) => (
                  <input
                    key={index}
                    ref={(el) => (inputRefs.current[index] = el)}
                    type="text"
                    inputMode="numeric"
                    maxLength={1}
                    value={digit}
                    onChange={(e) => handleChange(index, e.target.value)}
                    onKeyDown={(e) => handleKeyDown(index, e)}
                    onPaste={(e) => handlePaste(index, e)}
                    style={{
                      width: "50px",
                      height: "50px",
                      textAlign: "center",
                      fontSize: "24px",
                      fontWeight: "bold",
                      border: error && digit === "" ? "2px solid red" : "2px solid #ccc",
                      borderRadius: "8px",
                    }}
                    className="light-bg"
                  />
                ))}
              </div>

              {error && (
                <div style={{ color: "red", marginBottom: 12 }}>
                  <small>{error}</small>
                </div>
              )}

              <button
                className="lonyo-default-btn extra-btn d-block"
                type="submit"
              >
                VERIFY OTP
              </button>

              <div className="footerlogin" style={{ marginTop: 12 }}>
                <span>Didn't receive code?</span><br />
                <Link href="#">Resend OTP</Link>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default OtpArea;
