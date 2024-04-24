"use client";
import { useQuery } from "@tanstack/react-query";
import Inquiryreply from "./_components/Inquiryreply";
import Inquiryempty from "./_components/Inquiryreplyempty";
import { inquiryContentsAPI } from "@/api/adminInquiryAPI";
import { inquiryContentsData } from "@/types/admin/inquiry";

const page = ({ params }: { params: { inquiryId: number } }) => {
  const { data } = useQuery<inquiryContentsData>({
    queryKey: ["inquiryContents"],
    queryFn: () => inquiryContentsAPI(params.inquiryId),
  });

  return (
    <div className="mt-10 flex-auto mb-4 items-center">
      <div className="px-6 py-2">
        <div className="flex py-3 border border-t-0 border-l-0 border-r-0 mb-2">
          <div className="text-realGrey ">문의 번호</div>
          <div className="font-bold ml-4">{params.inquiryId}</div>
        </div>
        <div className="flex items-center border border-t-0 border-l-0 border-r-0 mb-2">
          <div className="flex py-2 mb-2">
            <div className="text-realGrey">작성자</div>
            <div className="font-bold ml-8 mr-20">
              {data?.result.memberNickname}
            </div>
          </div>
          <div className="flex py-2 mb-2">
            <div className="text-realGrey ml-20">작성일</div>
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
          <p className="mb-10 ml-11">{data?.result.inquiryContent}</p>
        </div>
        {data?.result.replyContent == null ? (
          <Inquiryempty inquiryId={data?.result.inquiryId ?? 0}/>
        ) : (
          <Inquiryreply replyContent={data?.result.replyContent ?? 0} />
        )}
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
