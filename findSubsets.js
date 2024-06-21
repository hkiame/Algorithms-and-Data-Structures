/**
 * This exponential runtime O(2 ^ n) meaning everytime the input grows by one, the
 * number of operations doubles. Exponential programs are only usable for a tiny
 * number of elements (< 100); Otherwise, it might not finish in your lifeltime.
 */

function findSubsets(n = "") {
  const array = Array.from(n);

  const base = [""];

  const results = array.reduce((prev, cur) => {
    const previousPlusElement = prev.map((el) => `${el}${cur}`);

    return prev.concat(previousPlusElement);
  }, base);

  return results;
}

console.log(findSubsets(["a", "b", "c"]));
