import { instanceNonAuth } from "@/lib/axiosConfig";
import { SignUpFormData } from "@/types/auth";

export const signUpAPI = async (data: SignUpFormData) => {
  try {
    const response = await instanceNonAuth.post(
      process.env.NEXT_PUBLIC_M03_URL as string,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    throw error;
  }
};
