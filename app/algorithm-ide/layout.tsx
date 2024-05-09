import IdeHeader from "@/components/header/IdeHeader";
import React from "react";

export default function layout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div className="flex flex-col">
      {modal}
      <div className="z-30 relative">
        <IdeHeader />
      </div>
      <div className="mt-[5.7vh] z-10 relative">{children}</div>
    </div>
  );
}
