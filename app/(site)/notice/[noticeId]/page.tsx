import { NoticeDetailData } from "@/types/admin/notice";
import React from "react";

const notice_detail_data: NoticeDetailData = {
  noticeTitle: "가천OJ 임시 점검 안내(완료)",
  createdDate: "2024-04-01",
  noticeContents:
    "안녕하십니까 가천OJ입니다. 가천OJ 채점서비스 안정화를 위해 임시 점검을 진행합니다. 이용에 불편을 드려서 죄송합니다.",
};

export default function page({ params }: { params: { noticeId: number } }) {
  return (
    <div>
      <span className="font-PretendardMedium text-[1.4vw]">공지사항 조회</span>
      <div className="flex flex-col mt-[7vh] space-y-[5vh]">
        <div className="flex items-center">
          <span className="font-PretendardSemiBold text-[1.2vw] mr-[3vw] w-[8vw]">
            공지 제목
          </span>
          <span className="font-PretendardLight text-[1vw]">
            {notice_detail_data.noticeTitle}
          </span>
          <span className="font-PretendardSemiBold text-[1.2vw] ml-[8vw] mr-[3vw]">
            게시일
          </span>
          <span className="font-PretendardLight text-[1vw]">
            {notice_detail_data.createdDate}
          </span>
        </div>
        <div className="flex">
          <span className="font-PretendardSemiBold text-[1.2vw] mr-[3vw] w-[8vw]">
            공지 내용
          </span>
          <span className="w-[40vw] font-PretendardLight text-[1vw]">
            {notice_detail_data.noticeContents}
          </span>
        </div>
      </div>
    </div>
  );
}

{
  /* <div>notice num {params.noticeId}</div> */
}
