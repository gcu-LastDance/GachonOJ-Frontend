import { instanceAuth } from "@/lib/axiosConfig";

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