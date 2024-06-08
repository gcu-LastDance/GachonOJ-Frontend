import { instanceAuth } from "@/lib/axiosConfig";
import { noticeFormData } from "@/types/admin/notice";

export const noticeListAPI = async (pageNo: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_B10_URL}?pageNo=${encodeURIComponent(pageNo)}`;
    const response = await instanceAuth.get(url);
    
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const noticeContentsAPI = async (noticeId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_B11_URL}/${encodeURIComponent(
      noticeId
    )}`;
    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const noticeEnrollAPI = async (data: noticeFormData) => {
  try {
    const response = await instanceAuth.post(
      process.env.NEXT_PUBLIC_B05_URL as string,
      data
    );

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const noticeDeleteAPI = async (noticeId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_B12_URL}/${encodeURIComponent(
      noticeId
    )}`;
    const response = await instanceAuth.delete(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};
