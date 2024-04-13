import HeaderNav from "@/components/nav/HeaderNav";
import SiteFooter from "@/components/footer/SiteFooter";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen">
        <HeaderNav />
        <div className="w-[65vw] mx-auto">{children}</div>
      </div>
      <SiteFooter />
    </div>
  );
}
