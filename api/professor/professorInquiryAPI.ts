import page from "@/app/(landing)/page";
import { instanceAuth } from "@/lib/axiosConfig";
import { InquiryFormData } from "@/types/professor/inquiry";

export const inquiryListAPI = async (pageId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_B09_URL}?pageId=${encodeURIComponent(
      pageId
    )}`;
    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const inquirySubmitAPI = async (data: InquiryFormData) => {
  try {
    const response = await instanceAuth.post(
      process.env.NEXT_PUBLIC_B03_URL as string,
      data
    );
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const inquiryContentsAPI = async (inquiryId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_B20_URL}/${encodeURIComponent(
      inquiryId
    )}`;
    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};
