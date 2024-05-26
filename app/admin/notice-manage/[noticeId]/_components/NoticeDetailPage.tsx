import { useQuery } from "@tanstack/react-query";
import React from "react";
import { noticeContentsAPI } from "@/api/admin/adminNoticeAPI";
import { noticeContentsData } from "@/types/admin/notice";

const NoticeDetailPage = ({ noticeId }: { noticeId: number }) => {
  const { data } = useQuery<noticeContentsData>({
    queryKey: ["noticeContents"],
    queryFn: () => noticeContentsAPI(noticeId),
  });

  return (
    <div className="mt-10 flex-auto mb-4 items-center">
      <div className="px-6 py-2">
        <div className="flex py-3 border border-t-0 border-l-0 border-r-0 mb-2">
          <div className="text-realGrey ">공지 번호</div>
          <div className="font-bold ml-4">{noticeId}</div>
        </div>
        <div className="flex items-center border border-t-0 border-l-0 border-r-0 mb-2">
          <div className="flex py-2 mb-2">
            <div className="text-realGrey">작성자</div>
            <div className="font-bold ml-8 mr-20">
              {data?.result?.memberNickname}
            </div>
          </div>
          <div className="flex py-2  mb-2">
            <div className="text-realGrey ml-20">작성일</div>
            <div className="font-bold ml-8 ">
              {data?.result.noticeCreatedDate}
            </div>
          </div>
        </div>
        <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2 items-center">
          <div className="text-realGrey ">제목</div>
          <h1 className="text-xl ml-11 font-bold">
            {data?.result.noticeTitle}
          </h1>
        </div>
        <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2 ">
          <div className="text-realGrey flex-shrink-0">내용</div>
          <p className="mb-10 ml-11 whitespace-pre-wrap">
            {data?.result.noticeContents}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetailPage;
