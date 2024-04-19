import React from 'react';

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-lightGrey text-primaryDark font-PretendardBlack">
      {children}
    </div>
  );
};