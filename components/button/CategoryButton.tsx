import React, { useState } from "react";

export default function CategoryButton({
  categories,
}: {
  categories: string[];
}) {
  const [isShowCategory, setIsShowCategory] = useState<boolean>(false);

  const handleShowCategory = () => {
    setIsShowCategory(true);
  };

  return (
    <div className="flex">
      {!isShowCategory ? (
        <button onClick={handleShowCategory} type="button">
          <span className="font-PretendardLight underline underline-offset-4 text-[0.8vw] text-realGrey decoration-realGrey">
            확인하기
          </span>
        </button>
      ) : (
        <span className="font-PretendardLight text-[0.8vw] text-realGrey">
          {categories?.join(", ")}
        </span>
      )}
    </div>
  );
}
