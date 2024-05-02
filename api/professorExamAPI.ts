import { instanceAuth } from "@/lib/axiosConfig";

export const examListAPI = async () => {
  try {

    const url = `${process.env.NEXT_PUBLIC_P09_URL}`;

    const response = await instanceAuth.get(url);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};