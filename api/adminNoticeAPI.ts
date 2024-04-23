import { instanceAuth } from "@/lib/axiosConfig";
import { noticeFormData } from "@/types/admin/notice";

export const noticeListAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_B10_URL as string
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const noticeContentsAPI = async (noticeId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_B07_URL}/${encodeURIComponent(
      noticeId
    )}`;
    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const noticeEnrollAPI = async(data: noticeFormData) => {
  try {
    const response = await instanceAuth.post(
      process.env.NEXT_PUBLIC_B05_URL as string, data
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
