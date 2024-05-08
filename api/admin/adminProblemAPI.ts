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