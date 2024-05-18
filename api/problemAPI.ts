import { instanceAuth, instanceNonAuth } from "@/lib/axiosConfig";
import {
  ProblemSolutionExcuteData,
  ProblemSolutionSubmitData,
  ProfileProblemType,
  difficulty,
} from "@/types/problem";

export const recProblemAPI = async () => {
  try {
    const response = await instanceNonAuth.get(
      process.env.NEXT_PUBLIC_P17_URL as string
    );
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const problemTableGuestAPI = async ({
  pageNum,
  searchKeyword,
  diff,
  sortType,
}: {
  pageNum: number;
  searchKeyword?: string;
  diff?: difficulty;
  sortType?: string;
}) => {
  try {
    if (searchKeyword) {
      const url = `${
        process.env.NEXT_PUBLIC_P01_URL as string
      }?pageNo=${pageNum}&search=${searchKeyword}`;
      const response = await instanceNonAuth.get(url);
      console.log(url);
      console.log(response);
      return response.data.result;
    } else if (diff) {
      const url = `${
        process.env.NEXT_PUBLIC_P01_URL as string
      }?pageNo=${pageNum}&diff=${diff}`;
      const response = await instanceNonAuth.get(url);
      console.log(url);
      console.log(response);
      return response.data.result;
    } else if (sortType) {
      const url = `${
        process.env.NEXT_PUBLIC_P01_URL as string
      }?pageNo=${pageNum}&sortType=${sortType}`;
      const response = await instanceNonAuth.get(url);
      console.log(url);
      console.log(response);
      return response.data.result;
    } else {
      const url = `${
        process.env.NEXT_PUBLIC_P01_URL as string
      }?pageNo=${pageNum}`;
      const response = await instanceNonAuth.get(url);
      console.log(url);
      console.log(response);
      return response.data.result;
    }
  } catch (error) {
    throw new Error(String(error));
  }
};

export const memberProblemTableAPI = async ({
  menu,
  pageNum,
}: {
  menu: ProfileProblemType;
  pageNum: number;
}) => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_P20_URL as string
    }?pageNo=${pageNum}&type=${menu}`;
    const response = await instanceAuth.get(url);
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const problemDetailAPI = async (problemId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P21_URL as string}/${problemId}`;
    const response = await instanceAuth.get(url);
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const problemSolutionExcuteAPI = async ({
  problemId,
  data,
}: {
  problemId: number;
  data: ProblemSolutionExcuteData;
}) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_S04_URL as string}/${problemId}`;
    const response = await instanceAuth.post(url, data);
    console.log(data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const problemSolutionSubmitAPI = async ({
  problemId,
  data,
}: {
  problemId: number;
  data: ProblemSolutionSubmitData;
}) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_S05_URL as string}/${problemId}`;
    const response = await instanceAuth.post(url, data);
    console.log(data);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const problemBookmarkPostAPI = async (problemId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M13_URL as string}/${problemId}`;
    const response = await instanceAuth.post(url);
    console.log(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const problemBookmarkDeleteAPI = async (problemId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M14_URL as string}/${problemId}`;
    const response = await instanceAuth.delete(url);
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};
