"use client";
import { useQuery } from "@tanstack/react-query";
import Inquiryreply from "./_components/Inquiryreply";
import { inquiryContentsAPI } from "@/api/professorInquiryAPI";
import { inquiryContentsData } from "@/types/professor/inquiry";

const page = ({ params }: { params: { InquiryId: number } }) => {
  const { data } = useQuery<inquiryContentsData>(
    {
    queryKey: ["professorinquiryContents"],
    queryFn: () => inquiryContentsAPI(params.InquiryId),
  });
  console.log(data);
  return (
    <div className="mt-10 flex-auto mb-4 items-center">
      <div className="px-6 py-2">
        <div className="flex py-3 border border-t-0 border-l-0 border-r-0 mb-2">
          <div className="text-realGrey ">문의 번호</div>
          <div className="font-bold ml-4">{params.InquiryId}</div>
        </div>
        <div className="flex items-center border border-t-0 border-l-0 border-r-0 mb-2">
          <div className="flex py-2 mb-2">
            <div className="text-realGrey">작성일</div>
            <div className="font-bold ml-8 ">
              {data?.result.inquiryCreatedDate}
            </div>
          </div>
        </div>
        <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2 items-center">
          <div className="text-realGrey ">제목</div>
          <h1 className="text-xl ml-11 font-bold">
            {data?.result.inquiryTitle}
          </h1>
        </div>
        <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2">
          <div className="text-realGrey">내용</div>
          <p className="mb-10 ml-11">{data?.result.inquiryContents}</p>
        </div>
        {data?.result.replyContent ? (
          <Inquiryreply replyContent={data?.result.replyContent} />
        ) : null}
      </div>
      <div className="flex justify-end">
        <button
          name="back"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg mb-5 mt-8 mr-8"
        >
          뒤로가기
        </button>
      </div>
    </div>
  );
};

export default page;
