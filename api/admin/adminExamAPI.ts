import { instanceAuth } from "@/lib/axiosConfig";

export const examListAPI = async (type: string, pageNo: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P02_URL}?type=${encodeURIComponent(
      type
    )}&pageNo=${encodeURIComponent(pageNo)}`;

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

export const findCandidateAPI = async (memberInfo: number | string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M37_URL}${encodeURIComponent(
      memberInfo
    )}`;
    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

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

export const examEditAPI = async (data: any, examId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P10_URL}/${encodeURIComponent(
      examId
    )}`;

    const response = await instanceAuth.put(url, data);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const examContentAPI = async (examId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P25_URL}/${encodeURIComponent(
      examId
    )}`;
    const response = await instanceAuth.get(url);

    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const examResultListAPI = async (examId: number, pageNo: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P28_URL}/${encodeURIComponent(
      examId
    )}/results?pageNo=${encodeURIComponent(pageNo)}
    `;
    const response = await instanceAuth.get(url);

    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const examResultAPI = async (testId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P27_URL}/${encodeURIComponent(
      testId
    )}`;
    const response = await instanceAuth.get(url);

    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};
