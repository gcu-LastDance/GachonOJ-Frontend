import { instanceAuth, instanceNonAuth } from "@/lib/axiosConfig";
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
      const response = await instanceNonAuth.get(url);
      return response.data.result.content;
    } else {
      const url = `${
        process.env.NEXT_PUBLIC_M12_URL as string
      }?page=${pageNum}&search=${searchKeyword}`;
      const response = await instanceNonAuth.get(url);
      return response.data.result.content;
    }
  } catch (error) {
    throw error;
  }
};

export const memberProgramLangAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M27_URL as string
    );
    console.log(response.data.result.memberLang);
    return response.data.result.memberLang;
  } catch (error) {
    throw error;
  }
};

export const memberProgramLangPatchAPI = async (lang: string) => {
  try {
    const response = await instanceAuth.put(
      process.env.NEXT_PUBLIC_M10_URL as string,
      { lang }
    );
    console.log(response.data.result);
    return response.data.result;
  } catch (error) {
    throw error;
  }
};

export const memberProfileDashBoardAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M35_URL as string
    );
    return response.data.result;
  } catch (error) {
    throw error;
  }
};
