"use client";
import { validateOtp } from "@/app/services/userService";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";

const OTPInput = () => {
  const router = useRouter();
  const [inputMessage, setInputMessage] = useState("");
  const [otp, setOtp] = useState("000000");
  useEffect(() => {
    console.log(otp);
  }, [otp]);

  const onOtpChange = (value: number, position: number) => {
    if (value > 9 && value) {
      return;
    }
    const modifiedString =
      otp.substring(0, position) + value + otp.substring(position + 1);
    setOtp(modifiedString);
  };
  return (
    <div>
      <div className="flex gap-4">
        <input
          type="number"
          className="border-black border-2 border-solid w-full"
          value={otp[0]}
          onChange={(e) => {
            const value = e.target.value ? parseInt(e.target.value) : 0;
            onOtpChange(value, 0);
          }}
        />
        <input
          type="number"
          className="border-black border-2 border-solid w-full"
          value={otp[1]}
          onChange={(e) => {
            const value = e.target.value ? parseInt(e.target.value) : 0;

            onOtpChange(value, 1);
          }}
        />
        <input
          type="number"
          className="border-black border-2 border-solid w-full"
          value={otp[2]}
          onChange={(e) => {
            const value = e.target.value ? parseInt(e.target.value) : 0;
            onOtpChange(value, 2);
          }}
        />
        <input
          type="number"
          className="border-black border-2 border-solid w-full"
          value={otp[3]}
          onChange={(e) => {
            const value = e.target.value ? parseInt(e.target.value) : 0;
            onOtpChange(value, 3);
          }}
        />
        <input
          type="number"
          className="border-black border-2 border-solid w-full"
          value={otp[4]}
          onChange={(e) => {
            const value = e.target.value ? parseInt(e.target.value) : 0;
            onOtpChange(value, 4);
          }}
        />
        <input
          type="number"
          className="border-black border-2 border-solid w-full"
          value={otp[5]}
          onChange={(e) => {
            const value = e.target.value ? parseInt(e.target.value) : 0;
            onOtpChange(value, 5);
          }}
        />
      </div>
      <button
        className="bg-[#00c4bb] px-4 py-2 rounded-md w-full"
        onClick={() => {
          validateOtp(otp).then((resp) => {
            console.log(resp.message);
            if (resp.data) {
              console.log("HOYHOYHOY");
              router.push("/main");
            }
          });
        }}
      >
        Verify OTP
      </button>
    </div>
  );
};

export default OTPInput;
