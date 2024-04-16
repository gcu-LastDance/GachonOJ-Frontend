'use client';
import Inquiryreply from './_components/Inquiryreply'
import Inquiryempty from './_components/Inquiryreplyempty'

const page = ({ params }: { params : {inquiryId: number} }) => {
  const fetchedInquiry = [{ 
    id: 1,
    author: "작성자 이름",
    created_date: "2024-04-13",
    title: "문의사항입니다1.",
    content: "문의사항 내용입니다1.",
    inquiry_status: 0
  },
  {   
    id: 2,
    author: "작성자 이름",
    created_date: "2024-04-13",
    title: "문의사항입니다2.",
    content: "문의사항 내용입니다2.",
    inquiry_status: 1}
];
const inquiry = fetchedInquiry[params.inquiryId - 1];
  return (
    <div className="flex flex-wrap mb-4 items-center">
      <div className="container mx-auto mt-8">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="px-6 py-2">
            <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2">
              <div className="text-gray-600 ">문의번호:</div>
              <div className="font-bold ml-4">{inquiry.id}</div>
            </div>
            <div className="flex items-center border border-t-0 border-l-0 border-r-0 mb-2">
              <div className="flex py-2 mb-2">
                <div className="text-gray-600">작성자:</div>
                <div className="font-bold ml-4">{inquiry.author}</div>
              </div>
              <div className="flex py-2  mb-2">
                <div className="text-gray-600 ml-4">작성일:</div>
                <div className="font-bold ml-4">{inquiry.created_date}</div>
              </div>
            </div>
            <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2 items-center">
              <div className="text-gray-600 ">제목:</div>
              <h1 className="text-xl ml-4 font-bold">{inquiry.title}</h1>
            </div>
            <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2">
              <div className="text-gray-600">내용:</div>
              <p className="mb-10 ml-4">{inquiry.content}</p>
            </div>
            <Inquiryempty/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
