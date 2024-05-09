"use client";

import React from "react";
import IdeProblemWindow from "../_components/IdeProblemWindow";
import IdeMain from "../_components/IdeMain";
import useUserStore from "@/store/useUserStore";
import IdeGuestFooter from "../_components/IdeGuestFooter";
import IdeFooter from "../_components/IdeFooter";

export default function page({ params }: { params: { problemId: number } }) {
  const { token } = useUserStore();

  return (
    <div className="flex flex-col">
      <div className="flex">
        <div className="w-[30vw] h-[89vh] border-[0.12vw] overflow-y-auto">
          <IdeProblemWindow problemId={params.problemId} />
        </div>
        <div className="w-[70vw] h-[89vh] border-[0.12vw] overflow-y-auto">
          <IdeMain problemId={params.problemId} />
        </div>
      </div>
      {!token ? <IdeGuestFooter /> : <IdeFooter />}
    </div>
  );
}
