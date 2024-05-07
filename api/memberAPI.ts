import {
  instanceAuth,
  instanceAuthWithMultipart,
  instanceNonAuth,
} from "@/lib/axiosConfig";
import { MemberPasswordPutData, MemberSettingPutData } from "@/types/member";

export const hoverProfileAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M28_URL as string
    );
    if (response.data.suceess === false)
      throw new Error(String(response.data.message));
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const memberProbInfoCardAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M17_URL as string
    );
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const memberTestInfoCardAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M16_URL as string
    );
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
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
    throw new Error(String(error));
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
    throw new Error(String(error));
  }
};

export const memberProgramLangPatchAPI = async (lang: string) => {
  try {
    const response = await instanceAuth.put(
      process.env.NEXT_PUBLIC_M10_URL as string,
      { memberLang: lang }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const memberProfileDashBoardAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M35_URL as string
    );
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const memberSettingGetAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M11_URL as string
    );
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const memberSettingPutAPI = async ({
  data,
  memberImg,
}: {
  data: MemberSettingPutData;
  memberImg: string | null;
}) => {
  try {
    const formData = new FormData();
    formData.append("img", memberImg as unknown as Blob);
    formData.append(
      "info",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    const response = await instanceAuthWithMultipart.put(
      process.env.NEXT_PUBLIC_M08_URL as string,
      formData
    );
    console.log(response.data);
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const memberPasswordPutAPI = async (data: MemberPasswordPutData) => {
  try {
    const response = await instanceAuth.put(
      process.env.NEXT_PUBLIC_M34_URL as string,
      data
    );
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};
