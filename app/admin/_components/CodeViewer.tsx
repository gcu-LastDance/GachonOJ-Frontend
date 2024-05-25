import { githubLight } from "@uiw/codemirror-theme-github";
import ReactCodeMirror from "@uiw/react-codemirror";
import { java } from "@codemirror/lang-java";
import { copyClipboard } from "@/lib/copyClipboard";
import { FaRegCopy } from "react-icons/fa6";

export default function CodeViewer({
  code,
  id,
  title,
  score,
  status,
}: {
  code: string;
  id: number;
  title: string;
  score: number;
  status: boolean;
}) {
  const extensions = [java()];

  return (
    <div className="border-4 border-semiGrey rounded-lg mb-5">
      <div className="flex bg-semiSemiGrey p-3">
        <div className="text-lg text-realGrey">
          {id + 1}번. {title}
        </div>
        <div className="flex mx-2 text-sm justify-center items-center">
          / {score} 점
        </div>
        <div className="ml-auto flex text-sm space-x-3">
          <div className="flex justify-center items-center space-x-1">
            <div>
              <FaRegCopy />
            </div>
            <button
              className="underline underline-offset-auto hover:text-realGrey "
              onClick={() => copyClipboard(code)}
            >
              클립보드로 복사
            </button>
          </div>
          <div
            className={`text-lg font-PretendardExtraBold ${
              status ? "text-[#405B90]" : "text-[#EA0000]"
            }`}
          >
            {status ? "정답" : "오답"}
          </div>
        </div>
      </div>
      <ReactCodeMirror
        value={code}
        theme={githubLight}
        autoFocus={true}
        editable={false}
        extensions={[extensions]}
      />
    </div>
  );
}
