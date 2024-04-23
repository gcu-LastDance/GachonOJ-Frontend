import { instanceNonAuth } from "@/lib/axiosConfig";
import { difficulty } from "@/types/problem";

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
    const url = `${process.env.NEXT_PUBLIC_P01_URL as string}?page=${pageNum}`;
    const response = await instanceNonAuth.get(url);
    console.log(response);
    return response.data.result.content;
  } catch (error) {
    throw error;
  }
};
