import IdeHeader from "@/components/header/IdeHeader";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <IdeHeader />
      <div className="mt-[5.7vh]">{children}</div>
    </div>
  );
}
