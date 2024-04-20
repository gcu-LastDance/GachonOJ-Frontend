import { instanceAuth } from "@/lib/axiosConfig";

export const hoverProfileAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M28_URL as string
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
