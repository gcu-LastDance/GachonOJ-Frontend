export const copyClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    alert("성공적으로 복사되었습니다.");
  } catch (error) {
    throw new Error(String(error));
  }
};
