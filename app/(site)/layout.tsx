import HeaderNav from "@/components/Nav/HeaderNav";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <HeaderNav />
      <div className="w-[75vw] mx-auto">{children}</div>
    </div>
  );
}
