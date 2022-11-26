// https://www.hackerrank.com/challenges/mark-and-toys/problem

function maximumToys(prices, k) {
  prices = prices.sort((a, b) => a - b);

  let count = 0;

  for (let i = 0; i < prices.length; i++) {
    let rem = k - prices[i];
    if (rem > 0) {
      count += 1;
      k = rem;
    } else {
      break;
    }
  }

  return count;
}

console.log(maximumToys([1, 12, 5, 111, 200, 1000, 10], 50));
