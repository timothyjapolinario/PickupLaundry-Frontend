"use client";
import { sendOtp } from "@/services/userService";
import { useEffect, useState } from "react";

type Prop = {
  onChangeEmailAddress?: (emailAddress: string) => void;
  onOtpSent?: () => void;
};
const EmailInput = ({ onOtpSent, onChangeEmailAddress }: Prop) => {
  const [emailInput, setEmailInput] = useState("");

  useEffect(() => {
    if (onChangeEmailAddress) {
      onChangeEmailAddress(emailInput);
    }
  }, [emailInput]);
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col py-4">
        <label className="text-xl ">Email</label>
        <input
          className="rounded-md"
          value={emailInput}
          onChange={(e) => {
            setEmailInput(e.target.value);
          }}
        />
      </div>

      <button
        className="bg-[#00c4bb] px-4 py-2 rounded-md w-full"
        onClick={() => {
          sendOtp(emailInput).then(() => {
            if (onOtpSent) {
              onOtpSent();
            }
          });
        }}
      >
        Send OTP
      </button>
    </div>
  );
};
export default EmailInput;
