import React from "react";

const NoticeDetailPage = ({ noticeId }: { noticeId: number }) => {
  const fetchedNotice = {
    noticeId: noticeId,
    author: "작성자 이름",
    created_date: "2024-04-13",
    title: "공지사항 제목",
    content: "공지사항 내용입니다.",
  };

  return (
    <div className="mt-10 flex-auto mb-4 items-center">
      <div className="px-6 py-2">
        <div className="flex py-3 border border-t-0 border-l-0 border-r-0 mb-2">
          <div className="text-realGrey ">공지 번호</div>
          <div className="font-bold ml-4">{fetchedNotice.noticeId}</div>
        </div>
        <div className="flex items-center border border-t-0 border-l-0 border-r-0 mb-2">
          <div className="flex py-2 mb-2">
            <div className="text-realGrey">작성자</div>
            <div className="font-bold ml-8 mr-20">{fetchedNotice.author}</div>
          </div>
          <div className="flex py-2  mb-2">
            <div className="text-realGrey ml-20">작성일</div>
            <div className="font-bold ml-8 ">{fetchedNotice.created_date}</div>
          </div>
        </div>
        <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2 items-center">
          <div className="text-realGrey ">제목</div>
          <h1 className="text-xl ml-11 font-bold">{fetchedNotice.title}</h1>
        </div>
        <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2">
          <div className="text-realGrey">내용</div>
          <p className="mb-10 ml-11">{fetchedNotice.content}</p>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetailPage;
