import AuthCard from "@/components/card/AuthCard";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex items-center">
      <AuthCard>{children}</AuthCard>
    </div>
  );
}
