import { instanceAuth } from "@/lib/axiosConfig";

export const OngoingExamsAPI = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P23_URL}`;

    const response = await instanceAuth.get(url);

    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};



export const LanguageGraphAPI = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_G04_URL}`;

    const response = await instanceAuth.get(url);

    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

