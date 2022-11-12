// https://leetcode.com/problems/rotate-array/
// I have used reversal algorithm

// Given an array, rotate the array to the right by k steps, where k is non-negative.
/**
Input: nums = [1,2,3,4,5,6,7], k = 3
Output: [5,6,7,1,2,3,4]
Explanation:
rotate 1 steps to the right: [7,1,2,3,4,5,6]
rotate 2 steps to the right: [6,7,1,2,3,4,5]
rotate 3 steps to the right: [5,6,7,1,2,3,4]
 */

const rotateRight = (nums, k) => {
  k %= nums.length;

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);

  return nums;
};

const rotateLeft = (nums, k) => {
  k %= nums.length;

  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  reverse(nums, 0, nums.length - 1);

  return nums;
};

const reverse = (nums, start, end) => {
  while (start < end) {
    const store = nums[start];
    nums[start] = nums[end];
    nums[end] = store;
    start += 1;
    end -= 1;
  }
};

console.log(rotateRight([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotateLeft([1, 2, 3, 4, 5, 6, 7], 3));
