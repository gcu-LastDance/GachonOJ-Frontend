export const copyClipboard = async (text: string) => {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      alert("성공적으로 복사되었습니다.");
    } catch (error) {
      throw new Error(String(error));
    }
  } else {
    alert("클립보드 API가 이 브라우저에서 지원되지 않습니다.");
  }
};
