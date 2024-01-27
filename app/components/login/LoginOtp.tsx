"use client";
import { useState } from "react";
import EmailInput from "./EmailInput";
import OTPInput from "./OTPInput";

const LoginOtp = () => {
  const [hasOtpSent, setHasOtpSent] = useState(false);
  const [emailInput, setEmailInput] = useState("");
  return (
    <div>
      {!hasOtpSent && (
        <EmailInput
          onOtpSent={() => {
            setHasOtpSent(true);
          }}
          onChangeEmailAddress={(emailAddress) => {
            setEmailInput(emailAddress);
          }}
        />
      )}
      {hasOtpSent && (
        <div>
          <h1>OTP has been sent to: {emailInput}</h1>
          <OTPInput />
        </div>
      )}
    </div>
  );
};
export default LoginOtp;
