// https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/description

var sumOfThree = function (num) {
  // Check if num is divisible by 3.
  if (num % 3 !== 0) {
    return [];
  }

  // Return three consecutive integers starting from num / 3.
  return [num / 3 - 1, num / 3, num / 3 + 1];
};

// console.log(sumOfThree(3654781249));
// console.log(sumOfThree(4));
// console.log(sumOfThree(33));
console.log(sumOfThree(56));
