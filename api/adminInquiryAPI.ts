import { instanceAuth } from "@/lib/axiosConfig";

export const inquiryContentsAPI = async (inquiryId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_B07_URL}/${encodeURIComponent(
      inquiryId
    )}`;
    const response = await instanceAuth.get(url);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const inquiryListAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_B02_URL as string
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
