import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryBlue: "#3B578D", // 프로젝트 메인 블루 컬러
        primaryGrey: "#F9FAFC", // 메인 블루 컬러가 섞인 회색
        primaryDark: "#262935", // 대부분의 텍스트에 사용
        primaryRed: "#C83838",
        superlightGrey: "#FAFAFA", // 배경색에 사용
        lightGrey: "#FCFCFC", // 배경색에 사용
        semiSemiGrey: "#E2E2E2",
        semiGrey: "#DBDBDB", // 테두리에 사용
        realGrey: "#767676",
        darkGrey: "#505050", // 덜 강조하는 텍스트에 사용
      },
      fontFamily: {
        PretendardBlack: ["Pretendard-Black"],
        PretendardExtraBold: ["Pretendard-ExtraBold"],
        PretendardBold: ["Pretendard-Bold"],
        PretendardSemiBold: ["Pretendard-SemiBold"],
        PretendardMedium: ["Pretendard-Medium"],
        PretendardRegular: ["Pretendard-Regular"],
        PretendardLight: ["Pretendard-Light"],
        PretendardExtraLight: ["Pretendard-ExtraLight"],
        PretendardThin: ["Pretendard-Thin"],
      },
    },
  },
  plugins: [],
};
export default config;
