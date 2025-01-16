// https://leetcode.com/problems/binary-search/description/

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = parseInt((left + right) / 2, 10);

    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
};

let nums = [-1, 0, 3, 5, 9, 12];

console.log(search(nums, 9));
