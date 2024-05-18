import { instanceAuth } from "@/lib/axiosConfig";

export type TestMenuType = "scheduled" | "ongoing" | "past";

export const scheduledContestAPI = async () => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_P24_URL as string
    }?type=대회&status=예약`;
    const response = await instanceAuth.get(url);
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const ongoingContestAPI = async () => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_P24_URL as string
    }?type=대회&status=진행 중`;
    const response = await instanceAuth.get(url);
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const pastContestAPI = async () => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_P24_URL as string
    }?type=대회&status=종료`;
    const response = await instanceAuth.get(url);
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const scheduledExamAPI = async () => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_P24_URL as string
    }?type=시험&status=예약`;
    const response = await instanceAuth.get(url);
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const ongoingExamAPI = async () => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_P24_URL as string
    }?type=시험&status=진행 중`;
    const response = await instanceAuth.get(url);
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const pastExamAPI = async () => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_P24_URL as string
    }?type=시험&status=종료`;
    const response = await instanceAuth.get(url);
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const examDetailAPI = async (examId: number) => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_P03_URL as string
    }/${examId}?type=시험`;
    const response = await instanceAuth.get(url);
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const contestDetailAPI = async (examId: number) => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_P03_URL as string
    }/${examId}?type=대회`;
    const response = await instanceAuth.get(url);
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};
