import React from 'react';


const Inquiryreply = ({ inquiryId }: { inquiryId: number }) => {
  const fetchedReply = [
    {
      replyId: 1,
      inquiryId: 1,
      content: "문의사항 답변입니다1",
    },
    {
      replyId: 2,
      inquiryId: 2,
      content: "문의사항 답변입니다2",
    },
  ];

  const inquiryReply = fetchedReply.find((reply) => reply.inquiryId === inquiryId);

  return (
    <div className='flex items-center'>
      <div className="flex mb-4 items-center">
        <label
          htmlFor="answer"
          className="self-start text-gray-700 font-bold mb-2 mr-4"
        >
          답변 내용
        </label>
      </div>
      <div className='flex flex-col'>
        <textarea value={inquiryReply?.content} readOnly className="resize-none" />
      </div>
    </div>
  );
};

export default Inquiryreply;

