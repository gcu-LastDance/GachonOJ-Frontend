import { instanceAuth } from "@/lib/axiosConfig";
import { InquiryFormData } from "@/types/inquiry";

/**
 * B09
 * inquiryDetailAPI
 * (site) 개인 문의사항 목록 조회 API
 */
export const inquiryTableAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_B09_URL as string
    );
    console.log(response.data.result.content);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

/**
 * B20
 * inquiryDetailAPI
 * (site) 문의 상세 조회 API
 */
export const inquiryDetailAPI = async (inquiryId: number) => {
  try {
    const response = await instanceAuth.get(
      `${process.env.NEXT_PUBLIC_B20_URL}/${inquiryId}`
    );
    console.log(response.data.result);
    return response.data.result;
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
