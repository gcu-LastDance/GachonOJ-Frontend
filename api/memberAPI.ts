import { instanceAuth } from "@/lib/axiosConfig";
import { userFormData } from "@/types/admin/user";

export const hoverProfileAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M28_URL as string
    );
    if (response.data.suceess === false) throw Error;
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const memberProbInfoCardAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M17_URL as string
    );
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const memberTestInfoCardAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M16_URL as string
    );
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const rankingTableAPI = async ({
  pageNum,
  searchKeyword,
}: {
  pageNum: number;
  searchKeyword: string;
}) => {
  try {
    if (searchKeyword === "") {
      const url = `${
        process.env.NEXT_PUBLIC_M12_URL as string
      }?page=${pageNum}`;
      const response = await instanceAuth.get(url);
      return response.data.result.content;
    } else {
      const url = `${
        process.env.NEXT_PUBLIC_M12_URL as string
      }?page=${pageNum}&search=${searchKeyword}`;
      const response = await instanceAuth.get(url);
      return response.data.result.content;
    }
  } catch (error) {
    throw error;
  }
};

export const modifyMyInfoAPI = async (data: userFormData) => {
  try {
    const response = await instanceAuth.post(
      process.env.NEXT_PUBLIC_M08_URL as string,
      data
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};