import { instanceAuth } from "@/lib/axiosConfig";

export const examListAPI = async (pageId: number) => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_P09_URL
    }/?pageId=${encodeURIComponent(pageId)}`;

    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const examDeleteAPI = async (examId: number) => {
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
