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
    <div className="flex flex-wrap mb-4 items-center">
      <div className="container mx-auto mt-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-2">
            <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2">
              <div className="text-gray-600 ">공지번호:</div>
              <div className="font-bold ml-4">{fetchedNotice.noticeId}</div>
            </div>
            <div className="flex items-center border border-t-0 border-l-0 border-r-0 mb-2">
              <div className="flex py-2 mb-2">
                <div className="text-gray-600">작성자:</div>
                <div className="font-bold ml-4">{fetchedNotice.author}</div>
              </div>
              <div className="flex py-2  mb-2">
                <div className="text-gray-600 ml-4">작성일:</div>
                <div className="font-bold ml-4">{fetchedNotice.created_date}</div>
              </div>
            </div>
            <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2 items-center">
              <div className="text-gray-600 ">제목:</div>
              <h1 className="text-xl ml-4 font-bold">{fetchedNotice.title}</h1>
            </div>
            <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2">
              <div className="text-gray-600">내용:</div>
              <p className="mb-10 ml-4">{fetchedNotice.content}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoticeDetailPage;
