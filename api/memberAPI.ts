import { instanceAuth } from "@/lib/axiosConfig";

export const hoverProfileAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M28_URL as string
    );
    if (response.data.suceess === false) throw Error;
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const memberProbCardAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M17_URL as string
    );
    if (response.data.suceess === false) throw Error;
    return response.data.result;
  } catch (error) {
    throw error;
  }
};
