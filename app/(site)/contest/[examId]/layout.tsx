import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen h-[90vh] ml-[-17.5vw] justify-center mt-[0.4vh]">
      <div className="w-[60vw] my-[4vh] bg-white border-[0.25vh] rounded-[0.6vh]">
        {children}
      </div>
    </div>
  );
}
