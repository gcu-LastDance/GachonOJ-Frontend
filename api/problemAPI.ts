import { instanceNonAuth } from "@/lib/axiosConfig";
import { difficulty } from "@/types/problem";

export const recProblemAPI = async () => {
  try {
    const response = await instanceNonAuth.get(
      process.env.NEXT_PUBLIC_P17_URL as string
    );
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw error;
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
    throw error;
  }
};
