import { instanceAuth } from "@/lib/axiosConfig";
import { userFormData } from "@/types/admin/user";


export const userListAPI = async () => {
  try {
    const url: string = window.location.href;
    let memberRole: string;

    if (url.includes("user-manage")) {
        memberRole = "학생"; // 학생으로 설정
    } else if (url.includes("professor-manage")) {
        memberRole = "교수"; // 교수로 설정
    } else {
        // 다른 경우에 대한 기본값 설정 (예: 기본값을 학생으로 설정)
        memberRole = "학생";
    }

    const encodedRole: string = encodeURIComponent(memberRole);
    const apiUrl: string = `${process.env.NEXT_PUBLIC_M09_URL}?memberRole=${encodedRole}`;

    const response = await instanceAuth.get(apiUrl);

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const userContentAPI = async (memberId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M32_URL}/${encodeURIComponent(
      memberId
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

export const userModifyAPI = async(memberId:number, data: userFormData) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M31_URL}/${encodeURIComponent(
      memberId
    )}`;
    const response = await instanceAuth.put(url, data);

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const userDeleteAPI = async(memberId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M33_URL}/${encodeURIComponent(
      memberId
    )}`;
    const response = await instanceAuth.delete(url);

    return response.data;
  } catch (error) {
    throw error;
  }
};