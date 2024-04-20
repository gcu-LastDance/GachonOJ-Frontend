"use client";

import React from "react";
import { BarLoader } from "react-spinners";

export default function loading() {
  return (
    <div className="w-full">
      <BarLoader color="#3B578D" style={{ width: "100%" }} />
    </div>
  );
}
