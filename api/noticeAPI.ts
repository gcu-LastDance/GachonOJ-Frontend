import { instanceAuth, instanceNonAuth } from "@/lib/axiosConfig";

/** 메인페이지 공지사항 테이블 몌ㅑ */
export const mainNoticeTableAPI = async () => {
  try {
    const response = await instanceNonAuth.get(
      process.env.NEXT_PUBLIC_B21_URL as string
    );
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};

/** 공지사항 페이지 테이블 API */
export const noticeTableAPI = async () => {
  try {
    const response = await instanceNonAuth.get(
      process.env.NEXT_PUBLIC_B06_URL as string
    );
    return response.data.result.content;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const noticeDetailAPI = async (noticeId: number) => {
  try {
    const response = await instanceNonAuth.get(
      `${process.env.NEXT_PUBLIC_B11_URL}/${noticeId}`
    );
    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};
