"use client";

import React, { useEffect, useState } from "react";

export default function TextTypingAni({ text }: { text: string }) {
  const [sequence, setSequence] = useState<string>("");
  const [textCount, setTextCount] = useState<number>(0);
  const [isTypingPaused, setIsTypingPaused] = useState<boolean>(false);

  useEffect(() => {
    const typingInterval = setInterval(() => {
      if (isTypingPaused) {
        clearInterval(typingInterval);
        setTimeout(() => {
          setIsTypingPaused(false);
          setTextCount(0);
          setSequence("");
        }, 8000); //몇 초 일시정지할 것인지
        return;
      }

      if (textCount >= text.length) {
        //text length 초과 시 undefind가 출력되는 것을 방지
        setIsTypingPaused(true);
        return;
      }

      const nextChar = text[textCount];
      setSequence((prevSequence) => prevSequence + nextChar);

      if (nextChar === "\n") {
        setTextCount((prevCount) => prevCount + 2);
      } else {
        setTextCount((prevCount) => prevCount + 1);
      }
    }, 100); // 설정한 초만큼 일정한 간격마다 실행된다

    return () => clearInterval(typingInterval); //컴포넌트가 마운트 해제되거나, 재렌더링 될 때마다 setInterval를 정리하는 함수를 반환함.
  }, [text, textCount, isTypingPaused]); //해당 상태들이 변경될 때마다 useEffect가 다시 실행 됨

  return (
    <p className="whitespace-pre-line break-normal text-[2.5vw] text-primaryDark font-PretendardSemiBold">
      {sequence}
      <span className="inline-block align-top w-[0.2vw] h-[7vh] bg-primaryDark ml-[0.3vw] blink" />
    </p>
  );
}
