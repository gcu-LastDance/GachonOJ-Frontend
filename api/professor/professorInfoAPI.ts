import { instanceAuth, instanceAuthWithMultipart} from "@/lib/axiosConfig";
import { myInfoModifyFormData } from "@/types/professor/user";

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
    throw error;
  }
};


export const getMyInfoAPI = async () => {
  try {
    const response = await instanceAuth.get(
      process.env.NEXT_PUBLIC_M11_URL as string
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const withDrawalAPI = async () => {
  try {
    const response = await instanceAuth.delete(
      process.env.NEXT_PUBLIC_M02_URL as string
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};