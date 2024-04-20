import React from "react";

export default function PaginationBar() {
  return (
    <div className="flex">
      <div className="mx-auto w-[24vw] grid grid-cols-12 justify-center items-center border-[0.08vw] border-realGrey overflow-hidden rounded-lg font-PretendardLight text-realGrey">
        <button type="button" className="py-[0.6vh]">
          ⟨
        </button>
        <button type="button" className="bg-primaryBlue text-white py-[0.6vh]">
          1
        </button>
        <button
          type="button"
          className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
        >
          2
        </button>
        <button
          type="button"
          className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
        >
          3
        </button>
        <button
          type="button"
          className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
        >
          4
        </button>
        <button
          type="button"
          className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
        >
          5
        </button>
        <button
          type="button"
          className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
        >
          6
        </button>
        <button
          type="button"
          className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
        >
          7
        </button>
        <button
          type="button"
          className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
        >
          8
        </button>
        <button
          type="button"
          className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
        >
          9
        </button>
        <button
          type="button"
          className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
        >
          10
        </button>
        <button
          type="button"
          className="py-[0.6vh] border-x-[0.03vw] border-realGrey"
        >
          ⟩
        </button>
      </div>
    </div>
  );
}
