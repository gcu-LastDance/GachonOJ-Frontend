import AdminHeader from "@/components/nav/manage/AdminHeader";
import BreadCrumbs from "@/components/nav/manage/BreadCrumbs";
import React from "react";
import SideAdminNav from "@/app/admin/_components/SideAdminNav";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <SideAdminNav />
      <div className="ml-[14vw]">
        <AdminHeader />
        <div className="mt-[7vh]">
          <BreadCrumbs />
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
}
