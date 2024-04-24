import { instanceAuth } from "@/lib/axiosConfig";

export const inquiryTableAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_B09_URL as string
    );
    console.log(response.data.result.content);
    return response.data.result.content;
  } catch (error) {
    throw error;
  }
};
