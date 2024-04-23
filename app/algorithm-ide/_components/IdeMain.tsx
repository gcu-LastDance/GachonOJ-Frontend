"use client";

import { githubLight } from "@uiw/codemirror-theme-github";
import ReactCodeMirror from "@uiw/react-codemirror";
import React, { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";

export default function IdeMain() {
  const [code, setCode] = useState<string>(
    '#include <iostream>\nusing namespace std;\n\nint main() {\n\tcout << "Hello, World!";\n\treturn 0;\n}'
  );

  return (
    <div>
      <div className="flex justify-between h-[5.5vh] w-full items-center bg-white px-[1vw] border-b-[0.15vw]">
        <span className="font-PretendardRegular text-[1.2vw]">C++</span>
        <button type="button">
          <IoSettingsOutline className="text-[1.7vw] text-primaryDark" />
        </button>
      </div>
      <ReactCodeMirror value={code} height="83vh" theme={githubLight} />
    </div>
  );
}
