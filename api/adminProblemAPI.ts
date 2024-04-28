import { instanceAuth } from "@/lib/axiosConfig";

export const problemListAPI = async (search:string) => {
  try {

    const url = `${process.env.NEXT_PUBLIC_P11_URL}?search=${encodeURIComponent(search)}`;

    const response = await instanceAuth.get(url);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};