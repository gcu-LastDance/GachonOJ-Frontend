import { instanceAuth, instanceNonAuth } from "@/lib/axiosConfig";
import {
  ProblemSolutionExcuteData,
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
  classType,
  diff,
  sortType,
}: {
  pageNum: number;
  searchKeyword?: string;
  classType?: string;
  diff?: difficulty;
  sortType?: string;
}) => {
  try {
    const url = `${
      process.env.NEXT_PUBLIC_P01_URL as string
    }?pageNo=${pageNum}`;
    const response = await instanceNonAuth.get(url);
    console.log(url);
    console.log(response);
    return response.data.result.content;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const memberProblemTableAPI = async ({
  menu,
}: {
  menu: ProfileProblemType;
}) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_P20_URL as string}?type=${menu}`;
    const response = await instanceAuth.get(url);
    console.log(response.data);
    return response.data.result.content;
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
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};
