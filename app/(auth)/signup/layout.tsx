import SignupCard from "@/app/(auth)/signup/_components/SignupCard";
import React from "react";

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="h-screen flex items-center bg-gradient-to-tl from-primaryBlue to-white">
      <SignupCard>{children}</SignupCard>
    </div>
  );
}
