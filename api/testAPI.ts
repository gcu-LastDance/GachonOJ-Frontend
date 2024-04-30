import { instanceAuth } from "@/lib/axiosConfig";

export type TestMenuType = "scheduled" | "past";

export const scheduledContestAPI = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P19_URL as string}?type=대회`;
    const response = await instanceAuth.get(url);
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const pastContestAPI = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P18_URL as string}?type=대회`;
    const response = await instanceAuth.get(url);
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const scheduledExamAPI = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P19_URL as string}?type=시험`;
    const response = await instanceAuth.get(url);
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const pastExamAPI = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P18_URL as string}?type=시험`;
    const response = await instanceAuth.get(url);
    return response.data.result;
  } catch (error) {
    throw error;
  }
};
