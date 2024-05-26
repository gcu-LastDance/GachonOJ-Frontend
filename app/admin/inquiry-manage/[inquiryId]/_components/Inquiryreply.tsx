import React from "react";

const Inquiryreply = ({ replyContent }: { replyContent: string }) => {
  return (
    <div className="flex items-center">
      <div className="flex mb-4 items-center">
        <label
          htmlFor="answer"
          className="self-start text-realGrey font-bold mb-2 mr-4"
        >
          답변 내용
        </label>
      </div>
      <div className="flex flex-col whitespace-pre-wrap">
        <div>{replyContent}</div>
      </div>
    </div>
  );
};

export default Inquiryreply;
