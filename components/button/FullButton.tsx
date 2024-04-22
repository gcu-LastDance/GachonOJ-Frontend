import React from "react";

interface FullButtonProps {
  onClick: () => void;
  text: string;
}

export default function FullButton({ onClick, text }: FullButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="bg-primaryBlue rounded-md w-full h-[6vh] flex items-center"
    >
      <span className="text-white font-PretendardBold text-lg mx-auto">
        {text}
      </span>
    </button>
  );
}
