import { instanceAuth } from "@/lib/axiosConfig";

export const contestListAPI = async (type:string) => {
  try {

    const url = `${process.env.NEXT_PUBLIC_P02_URL}?type=${encodeURIComponent(type)}`;

    const response = await instanceAuth.get(url);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};
