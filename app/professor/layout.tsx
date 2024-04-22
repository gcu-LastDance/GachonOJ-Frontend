import AdminHeader from "@/components/nav/manage/AdminHeader";
import React from "react";
import SideAdminNav from "./_components/SideProfessorNav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-auto">
      <SideAdminNav />
      <div className="ml-[14vw]">
        <AdminHeader />
        <div className="py-[8vh] px-[2vw]">
          {/* <BreadCrumbs /> */}
          <div className="font-PretendardRegular">{children}</div>
        </div>
      </div>
    </div>
  );
}
