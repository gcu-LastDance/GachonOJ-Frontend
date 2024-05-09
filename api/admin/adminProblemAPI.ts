import { instanceAuth } from "@/lib/axiosConfig";
import { ProblemFormData } from "@/types/admin/problem";
export const problemListAPI = async (search: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P11_URL}?search=${encodeURIComponent(
      search
    )}`;

    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const problemDeleteAPI = async (problemId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P15_URL}/${encodeURIComponent(
      problemId
    )}`;
    const response = await instanceAuth.delete(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const problemEnrollAPI = async (data: ProblemFormData) => {
  try {
    const response = await instanceAuth.post(
      process.env.NEXT_PUBLIC_P12_URL as string,
      data
    );

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }

};

export const problemContentAPI = async (problemId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P22_URL}/${encodeURIComponent(
      problemId
    )}`;
    const response = await instanceAuth.get(url);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const problemModifyAPI = async (problemId: number, data: ProblemFormData) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P13_URL}/${encodeURIComponent(
      problemId
    )}`;
    const response = await instanceAuth.put(url,data);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};