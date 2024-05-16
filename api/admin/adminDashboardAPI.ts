import { instanceAuth } from "@/lib/axiosConfig";

export const healthCheckAPI = async (service: string) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_G01_URL}/${encodeURIComponent(service)}`;

    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};