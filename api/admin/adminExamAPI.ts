import { instanceAuth } from "@/lib/axiosConfig";

export const examListAPI = async (type: string) => {
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

export const findCandidateAPI = async (memberInfo: number | string ) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M37_URL}${encodeURIComponent(
      memberInfo
    )}`;
    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
}

export const examEnrollAPI = async (data: any) => {
  try {
    const response = await instanceAuth.post(
      process.env.NEXT_PUBLIC_P04_URL as string,
      data
    );

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }

};