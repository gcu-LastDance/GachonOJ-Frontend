import { instanceNonAuth } from "@/lib/axiosConfig";
import { LoginFormData, SignUpData } from "@/types/auth";

export const loginAPI = async (data: LoginFormData) => {
  try {
    const response = await instanceNonAuth.post(
      process.env.NEXT_PUBLIC_M01_URL as string,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const signUpAPI = async (data: SignUpData) => {
  try {
    const response = await instanceNonAuth.post(
      process.env.NEXT_PUBLIC_M03_URL as string,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const emailVerifyAPI = async (email: string) => {
  try {
    const response = await instanceNonAuth.post(
      process.env.NEXT_PUBLIC_M04_URL as string,
      { memberEmail: email }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const emailCodeVerifyAPI = async ({
  memberEmail,
  emailCode,
}: {
  memberEmail: string;
  emailCode: string;
}) => {
  try {
    const response = await instanceNonAuth.post(
      process.env.NEXT_PUBLIC_M05_URL as string,
      { memberEmail: memberEmail, authCode: emailCode }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const nicknameCheckAPI = async (nickname: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M07_URL}/${encodeURIComponent(
      nickname
    )}`;
    const response = await instanceNonAuth.get(url);
    return response.data;
  } catch (error) {
    throw error;
  }
};