export const memoize = function memoize(func) {
  const cache = {};

  return function wrap(...args) {
    const hash = JSON.stringify(args);
    return (hash in cache) ? cache[hash] : cache[hash] = func.apply(this, args);
  };
};
