import { instanceAuth } from "@/lib/axiosConfig";


export const problemListAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_P11_URL as string
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};

export const problemSearchAPI = async (search:string) => {
  try {

    
    const url = `${process.env.NEXT_PUBLIC_P11_URL}?search=${encodeURIComponent(search)}`;

    const response = await instanceAuth.get(url);
    
    return response.data;
  } catch (error) {
    throw error;
  }
};
