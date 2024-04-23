import React from "react";
import SideAdminNav from "@/app/admin/_components/SideAdminNav";
import AdminHeader from "@/components/nav/manage/AdminHeader";
import BreadCrumbs from "@/components/nav/manage/BreadCrumbs";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-auto">
      <SideAdminNav />
      <div className="ml-[14vw]">
        <AdminHeader />
        <div className="py-[2.5vh] px-[2vw]">
          <BreadCrumbs />
          <div className="font-PretendardRegular mt-[6vh]">{children}</div>
        </div>
      </div>
    </div>
  );
}
