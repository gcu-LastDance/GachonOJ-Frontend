import React, { useState } from "react";

const Inquiryreplyempty: React.FC = () => {
  const [answer, setAnswer] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAnswer(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(answer);
  };

  return (
    <form onSubmit={handleSubmit} className="flex-auto flex flex-col">
      <div className="flex py-3 mb-4 items-center">
        <label
          htmlFor="answer"
          className="self-start text-realGrey font-bold mb-2 mr-4"
        >
          답변 내용 작성
        </label>
        <div className="flex flex-col w-1/2">
          <textarea
            id="answer"
            name="answer"
            value={answer}
            onChange={handleChange}
            className="shadow appearance-none border rounded text-realGrey leading-tight focus:outline-none focus:shadow-outline"
            rows={5}
            required
          ></textarea>
          <div className="flex mt-auto justify-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bol mt-5 d py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              답변 제출
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Inquiryreplyempty;
