export const wordDeclension = (value: number, words: string[]) => {
  const formattedValue = Math.abs(value) % 100;
  const num = value % 10;

  if (formattedValue > 10 && formattedValue < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num == 1) return words[0];
  return words[2];
};
