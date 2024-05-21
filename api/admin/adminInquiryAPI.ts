import { instanceAuth } from "@/lib/axiosConfig";
import { replyFormData } from "@/types/admin/inquiry";

export const inquiryContentsAPI = async (inquiryId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_B07_URL}/${encodeURIComponent(
      inquiryId
    )}`;
    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const inquiryListAPI = async (pageNo: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_B02_URL}?pageNo=${encodeURIComponent(pageNo)}`;

    const response = await instanceAuth.get(url);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};
export const inquiryReplyAPI = async (
  inquiryId: number,
  data: replyFormData
) => {
  try {
    const url =
      `${process.env.NEXT_PUBLIC_B04_URL}/${inquiryId}/reply` as string;
    const response = await instanceAuth.post(url, data);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const inquiryDeleteAPI = async (inquiryId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_B14_URL}/${encodeURIComponent(
      inquiryId
    )}`;
    const response = await instanceAuth.delete(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};
