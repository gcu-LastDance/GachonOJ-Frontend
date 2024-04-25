import { instanceAuth } from "@/lib/axiosConfig";
import { userFormData } from "@/types/admin/user";


export const userListAPI = async () => {
  try {
    const memberRole = "학생";
    const url = `${process.env.NEXT_PUBLIC_M09_URL}?memberRole=${encodeURIComponent(memberRole)}`;

    const response = await instanceAuth.get(url);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};


export const userContentAPI = async (noticeId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M11_URL}/${encodeURIComponent(
      noticeId
    )}`;
    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userEnrollAPI = async(data: userFormData) => {
  try {
    const response = await instanceAuth.post(
      process.env.NEXT_PUBLIC_M06_URL as string, data
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const userModifyAPI = async(data: userFormData) => {
  try {
    const response = await instanceAuth.post(
      process.env.NEXT_PUBLIC_M25_URL as string, data
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

// API가 없음

export const userDeleteAPI = async(noticeId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M02_URL}/${encodeURIComponent(
      noticeId
    )}`;
    const response = await instanceAuth.delete(url);

    return response.data;
  } catch (error) {
    throw error;
  }
};