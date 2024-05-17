import { instanceAuth } from "@/lib/axiosConfig";

// export const healthCheckAPI = async (service: string) => {
//   try {
//     const url = `${process.env.NEXT_PUBLIC_G01_URL}/${encodeURIComponent(service)}`;

//     const response = await instanceAuth.get(url);

//     return response.data;
//   } catch (error) {
//     throw new Error(String(error));
//   }
// };


export const AiTokenAPI = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_G03_URL}`;

    const response = await instanceAuth.get(url);

    return response.data;
  } catch (error) {
    throw new Error(String(error));
  }
};

export const TodaySubmissionAPI = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_G05_URL}`;

    const response = await instanceAuth.get(url);

    return response.data.result;
  } catch (error) {
    throw new Error(String(error));
  }
};
