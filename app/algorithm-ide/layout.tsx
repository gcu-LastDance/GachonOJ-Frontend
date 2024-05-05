"use client";

import IdeHeader from "@/components/header/IdeHeader";
import React from "react";
import IdeGuestFooter from "./_components/IdeGuestFooter";
import useUserStore from "@/store/useUserStore";
import IdeFooter from "./_components/IdeFooter";

export default function layout({
  children,
  settingModal,
}: {
  children: React.ReactNode;
  settingModal: React.ReactNode;
}) {
  const { token } = useUserStore();

  return (
    <div className="flex flex-col">
      {settingModal}
      <div className="z-30 relative">
        <IdeHeader />
      </div>
      <div className="mt-[5.7vh] z-10 relative">{children}</div>
      {!token ? <IdeGuestFooter /> : <IdeFooter />}
    </div>
  );
}
