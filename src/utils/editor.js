export const fontSizesFromTo = (from, to) => {
  const result = [];

  for (let i = from; i <= to; i += 1) {
    result.push(`${i}px`);
  }

  return result.join(' ');
};
