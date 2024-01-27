import { CustomResponse } from "@/types/Response";

export const sendOtp = async (
  emailAddress: string
): Promise<CustomResponse<boolean>> => {
  const result: CustomResponse<boolean> = {
    data: true,
    isSuccess: true,
    message: `OTP Sent ${emailAddress}`,
  };
  return result;
};

export const validateOtp = async (
  otp: string
): Promise<CustomResponse<boolean>> => {
  const resultNotValid: CustomResponse<boolean> = {
    data: false,
    isSuccess: false,
    message: "Invalid OTP",
  };
  const resultValid: CustomResponse<boolean> = {
    data: true,
    isSuccess: true,
    message: "Valid OTP",
  };
  if (otp !== "121212") {
    return resultNotValid;
  }
  return resultValid;
};
