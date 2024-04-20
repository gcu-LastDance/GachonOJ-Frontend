import AdminHeader from "@/components/Nav/manage/AdminHeader";
import BreadCrumbs from "@/components/Nav/manage/BreadCrumbs";
import React from "react";
import SideAdminNav from "@/app/admin/_components/SideAdminNav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-auto">
      <SideAdminNav />
      <div className="ml-[14vw]">
        <AdminHeader />
        <div className="py-[2.5vh] px-[2vw]">
          <BreadCrumbs />
          <div className="font-PretendardRegular">{children}</div>
        </div>
      </div>
    </div>
  );
}
