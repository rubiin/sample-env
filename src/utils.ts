export const splitLine = (line: string) => {
  const result = line.split("=");

  if (result.length === 1)
    return result[0];
  return `${result[0]}=`;
};
