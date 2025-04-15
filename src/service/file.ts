export const loadJavaScriptCode = async (filePath: string) => {
  const response = await fetch(filePath);
  const code = await response.text();
  return code;
};
