import { instanceAuth } from "@/lib/axiosConfig";

export const contestListAPI = async (type: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P02_URL}?type=${encodeURIComponent(
      type
    )}`;

    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const contestDeleteAPI = async (examId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P05_URL}/${encodeURIComponent(
      examId
    )}`;
    const response = await instanceAuth.delete(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};
