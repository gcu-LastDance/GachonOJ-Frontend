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
    status: 0
  },
  {   
    id: 2,
    author: "작성자 이름",
    created_date: "2024-04-13",
    title: "문의사항입니다2.",
    content: "문의사항 내용입니다2.",
    status: 1}
  ];
  const inquiry = fetchedInquiry.find((item) => item.id == params.inquiryId);
  return (
    <div className="mt-10 flex-auto mb-4 items-center">
          <div className="px-6 py-2">
            <div className="flex py-3 border border-t-0 border-l-0 border-r-0 mb-2">
              <div className="text-realGrey ">문의 번호</div>
              <div className="font-bold ml-4">{inquiry?.id}</div>
            </div>
            <div className="flex items-center border border-t-0 border-l-0 border-r-0 mb-2">
              <div className="flex py-2 mb-2">
                <div className="text-realGrey">작성자</div>
                <div className="font-bold ml-8 mr-20">{inquiry?.author}</div>
              </div>
              <div className="flex py-2 mb-2">
                <div className="text-realGrey ml-20">작성일</div>
                <div className="font-bold ml-8 ">{inquiry?.created_date}</div>
              </div>
            </div>
            <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2 items-center">
              <div className="text-realGrey ">제목</div>
              <h1 className="text-xl ml-11 font-bold">{inquiry?.title}</h1>
            </div>
            <div className="flex py-2 border border-t-0 border-l-0 border-r-0 mb-2">
              <div className="text-realGrey">내용</div>
              <p className="mb-10 ml-11">{inquiry?.content}</p>
            </div>
            {inquiry?.status === 0 ? <Inquiryempty/> : <Inquiryreply inquiryId={inquiry?.id ?? 0} />}
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
