import { instanceAuth, instanceAuthWithMultipart } from "@/lib/axiosConfig";
import { myInfoModifyFormData, userFormData } from "@/types/admin/user";

export const userListAPI = async () => {
  try {
    const memberRole = "학생";

    const url = `${
      process.env.NEXT_PUBLIC_M09_URL
    }?memberRole=${encodeURIComponent(memberRole)}`;

    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const professorListAPI = async () => {
  try {
    const memberRole = "교수";

    const url = `${
      process.env.NEXT_PUBLIC_M09_URL
    }?memberRole=${encodeURIComponent(memberRole)}`;

    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const userContentAPI = async (memberId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M32_URL}/${encodeURIComponent(
      memberId
    )}`;
    const response = await instanceAuth.get(url);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const userEnrollAPI = async (data: userFormData) => {
  try {
    const response = await instanceAuth.post(
      process.env.NEXT_PUBLIC_M06_URL as string,
      data
    );

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const userModifyAPI = async (memberId: number, data: userFormData) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M31_URL}/${encodeURIComponent(
      memberId
    )}`;
    const response = await instanceAuth.put(url, data);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const userDeleteAPI = async (memberId: number) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_M33_URL}/${encodeURIComponent(
      memberId
    )}`;
    const response = await instanceAuth.delete(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const myInfoModifyAPI = async ({
  data,
  memberImg,
}: {
  data: myInfoModifyFormData;
  memberImg: File | null; // File 형식으로 변경
}) => {
  try {
    const formData = new FormData();
    if (memberImg) {
      formData.append("img", memberImg);
    }
    formData.append(
      "info",
      new Blob([JSON.stringify(data)], { type: "application/json" })
    );
    const response = await instanceAuthWithMultipart.put(
      process.env.NEXT_PUBLIC_M08_URL as string,
      formData
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const getMyInfoAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M11_URL as string
    );
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const nicknameCheckAPI = async (nickname: string) => {
  try {
    const response = await instanceAuth.post(
      process.env.NEXT_PUBLIC_M07_URL as string,
      { memberNickname: nickname }
    );
    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};
