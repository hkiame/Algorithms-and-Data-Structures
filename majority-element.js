// https://leetcode.com/problems/majority-element/description/?envType=problem-list-v2&envId=sorting
// Boyer-Moore Voting Algorithm

const majorityElement = (nums) => {
  let candidate = null;
  let count = 0;

  for (let num of nums) {
    if (count === 0) {
      candidate = num;
    }
    count += num === candidate ? 1 : -1;
  }

  return candidate;
};

// const nums = [2, 2, 1, 1, 1, 2, 2];
const nums = [1];

console.log(majorityElement(nums));
