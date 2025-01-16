// https://leetcode.com/problems/two-sum/description/

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const needle = target - nums[i];

    if (map.has(needle)) {
      return [i, map.get(needle)];
    }

    map.set(nums[i], i);
  }

  return [];
}
