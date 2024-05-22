import React from "react";
import { HiOutlineExternalLink } from "react-icons/hi";

const GuideShortCut = () => {
  return (
    
      <div className="flex flex-col h-full shadow-md border-semiGrey border-4 bg-white px-5 py-5">
        <div className="text-2xl">
        <div>가천OJ</div>
        <div>교수님</div>
        <div>이용 가이드</div>
        </div>
        <div className="flex items-center mt-auto underline text-semiGrey">바로가기 <HiOutlineExternalLink/></div>
      </div>
      
 
  );
};

export default GuideShortCut;
